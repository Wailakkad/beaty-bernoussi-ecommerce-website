// app/api/orders/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import type { Transporter } from 'nodemailer';
import { PRODUCTS } from '@/data/products';

// Define types
interface Customer {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
}

interface CartItem {
  productId: string | number;
  quantity: number;
}

interface Product {
  id: string | number;
  name: string;
  price: number;
  image: string;
}

interface EnrichedCartItem extends CartItem {
  product?: Product;
}

interface OrderData {
  customer: Customer;
  items: CartItem[];
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  timestamp: string;
}

interface EnrichedOrderData extends Omit<OrderData, 'items'> {
  items: EnrichedCartItem[];
}

// Configure your email transporter
const transporter: Transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

// Verify transporter configuration
transporter.verify(function (error: Error | null) {
  if (error) {
    console.log('SMTP configuration error:', error);
  } else {
    console.log('Server is ready to send emails');
  }
});

// Helper function to format order email for store owner
function generateStoreOwnerEmail(orderData: EnrichedOrderData): string {
  const { customer, items, subtotal, shipping, tax, total, timestamp } = orderData;
  
  // Get the base URL from environment or use a default
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  
  const itemsList = items.map((item: EnrichedCartItem) => {
    const product = item.product || { name: 'Product', price: 0, image: '' };
    const imageUrl = product.image.startsWith('http') 
      ? product.image 
      : `${baseUrl}${product.image}`;
    
    return `
      <tr>
        <td style="padding: 15px 10px; border-bottom: 1px solid #e5e7eb;">
          <div style="display: flex; align-items: center; gap: 15px;">
            <img src="${imageUrl}" alt="${product.name}" style="width: 80px; height: 80px; object-fit: cover; border-radius: 8px; border: 1px solid #e5e7eb;" />
            <div>
              <div style="font-weight: 600; color: #111827; margin-bottom: 4px;">${product.name}</div>
              <div style="font-size: 14px; color: #6b7280;">${product.price.toFixed(2)} MAD</div>
            </div>
          </div>
        </td>
        <td style="padding: 15px 10px; border-bottom: 1px solid #e5e7eb; text-align: center; vertical-align: middle;">
          <span style="background: #f3f4f6; padding: 4px 12px; border-radius: 6px; font-weight: 600;">×${item.quantity}</span>
        </td>
        <td style="padding: 15px 10px; border-bottom: 1px solid #e5e7eb; text-align: right; vertical-align: middle;">
          <span style="font-weight: 700; color: #d4af37; font-size: 16px;">${(product.price * item.quantity).toFixed(2)} MAD</span>
        </td>
      </tr>
    `;
  }).join('');

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, #d4af37 0%, #f4e5c3 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
        <h1 style="color: #000; margin: 0; font-size: 28px;">🛍️ New Order Received!</h1>
      </div>
      
      <div style="background: #ffffff; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 10px 10px;">
        <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h2 style="color: #d4af37; margin-top: 0; font-size: 20px;">📋 Order Details</h2>
          <p style="margin: 5px 0;"><strong>Order Date:</strong> ${new Date(timestamp).toLocaleString('en-GB', { timeZone: 'Africa/Casablanca' })}</p>
          <p style="margin: 5px 0;"><strong>Order ID:</strong> #${Date.now()}</p>
        </div>

        <div style="margin-bottom: 30px;">
          <h2 style="color: #d4af37; border-bottom: 2px solid #d4af37; padding-bottom: 10px; font-size: 20px;">👤 Customer Information</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0;"><strong>Name:</strong></td>
              <td style="padding: 8px 0;">${customer.firstName} ${customer.lastName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>Email:</strong></td>
              <td style="padding: 8px 0;"><a href="mailto:${customer.email}" style="color: #d4af37;">${customer.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>Phone:</strong></td>
              <td style="padding: 8px 0;"><a href="tel:${customer.phone}" style="color: #d4af37;">${customer.phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>Address:</strong></td>
              <td style="padding: 8px 0;">${customer.address}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>City:</strong></td>
              <td style="padding: 8px 0;">${customer.city}, ${customer.state}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>Postal Code:</strong></td>
              <td style="padding: 8px 0;">${customer.zipCode}</td>
            </tr>
          </table>
        </div>

        <div style="margin-bottom: 30px;">
          <h2 style="color: #d4af37; border-bottom: 2px solid #d4af37; padding-bottom: 10px; font-size: 20px;">🛒 Order Items</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <thead>
              <tr style="background: #f9fafb;">
                <th style="padding: 10px; text-align: left; border-bottom: 2px solid #d4af37;">Product</th>
                <th style="padding: 10px; text-align: center; border-bottom: 2px solid #d4af37;">Qty</th>
                <th style="padding: 10px; text-align: right; border-bottom: 2px solid #d4af37;">Price</th>
              </tr>
            </thead>
            <tbody>
              ${itemsList}
            </tbody>
          </table>
        </div>

        <div style="background: #f9fafb; padding: 20px; border-radius: 8px;">
          <h2 style="color: #d4af37; margin-top: 0; font-size: 20px;">💰 Order Summary</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0;">Subtotal:</td>
              <td style="padding: 8px 0; text-align: right;">${subtotal.toFixed(2)} MAD</td>
            </tr>
            <tr>
              <td style="padding: 8px 0;">Shipping:</td>
              <td style="padding: 8px 0; text-align: right;">${shipping === 0 ? 'FREE' : shipping.toFixed(2) + ' MAD'}</td>
            </tr>
           
            <tr style="border-top: 2px solid #d4af37; font-size: 18px; font-weight: bold;">
              <td style="padding: 15px 0 0 0; color: #d4af37;">TOTAL:</td>
              <td style="padding: 15px 0 0 0; text-align: right; color: #d4af37;">${total.toFixed(2)} MAD</td>
            </tr>
          </table>
        </div>

        <div style="margin-top: 30px; padding: 20px; background: #fef3c7; border-left: 4px solid #d4af37; border-radius: 4px;">
          <p style="margin: 0; font-weight: bold; color: #92400e;">⚠️ Action Required:</p>
          <p style="margin: 10px 0 0 0; color: #92400e;">Please contact the customer to confirm the order and arrange delivery/payment details.</p>
        </div>
      </div>

      <div style="text-align: center; margin-top: 20px; padding: 20px; color: #6b7280; font-size: 12px;">
        <p style="margin: 5px 0;">This is an automated notification from your e-commerce store.</p>
        <p style="margin: 5px 0;">© ${new Date().getFullYear()} Your Beauty Store. All rights reserved.</p>
      </div>
    </body>
    </html>
  `;
}

// Helper function to format order confirmation email for customer
function generateCustomerEmail(orderData: EnrichedOrderData): string {
  const { customer, items, subtotal, shipping, tax, total, timestamp } = orderData;
  
  const itemsList = items.map((item: EnrichedCartItem) => {
    const product = item.product || { name: 'Product', price: 0 };
    return `
      <tr>
        <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">
          ${product.name}
        </td>
        <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; text-align: center;">
          ${item.quantity}
        </td>
        <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; text-align: right;">
          ${(product.price * item.quantity).toFixed(2)} MAD
        </td>
      </tr>
    `;
  }).join('');

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, #d4af37 0%, #f4e5c3 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
        <h1 style="color: #000; margin: 0; font-size: 28px;">✨ Thank You for Your Order!</h1>
      </div>
      
      <div style="background: #ffffff; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 10px 10px;">
        <p style="font-size: 16px; color: #374151;">Dear ${customer.firstName},</p>
        <p style="font-size: 16px; color: #374151;">Thank you for your order! We've received your order and will contact you shortly to confirm the details and arrange delivery.</p>

        <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h2 style="color: #d4af37; margin-top: 0; font-size: 20px;">📋 Order Summary</h2>
          <p style="margin: 5px 0;"><strong>Order Date:</strong> ${new Date(timestamp).toLocaleString('en-GB', { timeZone: 'Africa/Casablanca' })}</p>
          <p style="margin: 5px 0;"><strong>Order ID:</strong> #${Date.now()}</p>
        </div>

        <div style="margin-bottom: 30px;">
          <h2 style="color: #d4af37; border-bottom: 2px solid #d4af37; padding-bottom: 10px; font-size: 20px;">🛒 Your Items</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <thead>
              <tr style="background: #f9fafb;">
                <th style="padding: 10px; text-align: left; border-bottom: 2px solid #d4af37;">Product</th>
                <th style="padding: 10px; text-align: center; border-bottom: 2px solid #d4af37;">Qty</th>
                <th style="padding: 10px; text-align: right; border-bottom: 2px solid #d4af37;">Price</th>
              </tr>
            </thead>
            <tbody>
              ${itemsList}
            </tbody>
          </table>
        </div>

        <div style="background: #f9fafb; padding: 20px; border-radius: 8px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0;">Subtotal:</td>
              <td style="padding: 8px 0; text-align: right;">${subtotal.toFixed(2)} MAD</td>
            </tr>
            <tr>
              <td style="padding: 8px 0;">Shipping:</td>
              <td style="padding: 8px 0; text-align: right;">${shipping === 0 ? 'FREE' : shipping.toFixed(2) + ' MAD'}</td>
            </tr>
            
            <tr style="border-top: 2px solid #d4af37; font-size: 18px; font-weight: bold;">
              <td style="padding: 15px 0 0 0; color: #d4af37;">TOTAL:</td>
              <td style="padding: 15px 0 0 0; text-align: right; color: #d4af37;">${total.toFixed(2)} MAD</td>
            </tr>
          </table>
        </div>

        <div style="margin-top: 30px; padding: 20px; background: #dbeafe; border-left: 4px solid #3b82f6; border-radius: 4px;">
          <p style="margin: 0; font-weight: bold; color: #1e40af;">📞 What's Next?</p>
          <p style="margin: 10px 0 0 0; color: #1e40af;">Our team will contact you at ${customer.phone} within 24 hours to confirm your order and arrange payment and delivery details.</p>
        </div>

        <div style="margin-top: 30px;">
          <h3 style="color: #d4af37; font-size: 18px;">Shipping Address</h3>
          <p style="margin: 5px 0; color: #6b7280;">
            ${customer.address}<br>
            ${customer.city}, ${customer.state} ${customer.zipCode}
          </p>
        </div>
      </div>

      <div style="text-align: center; margin-top: 20px; padding: 20px; color: #6b7280; font-size: 12px;">
        <p style="margin: 5px 0;">If you have any questions, please don't hesitate to contact us.</p>
        <p style="margin: 5px 0;">© ${new Date().getFullYear()} Your Beauty Store. All rights reserved.</p>
      </div>
    </body>
    </html>
  `;
}

export async function POST(request: Request) {
  try {
    // Parse request body
    const orderData: OrderData = await request.json();
    
    // Validate required fields
    if (!orderData.customer || !orderData.items || orderData.items.length === 0) {
      return NextResponse.json(
        { error: 'Missing required order information' },
        { status: 400 }
      );
    }

    // Validate customer fields
    const { customer } = orderData;
    if (!customer.firstName || !customer.lastName || !customer.email || !customer.phone || 
        !customer.address || !customer.city || !customer.state || !customer.zipCode) {
      return NextResponse.json(
        { error: 'Incomplete customer information' },
        { status: 400 }
      );
    }

    // Enrich order data with product details
    // Convert any StaticImageData images to a string (using .src) so they match the local Product.image: string type
    const enrichedItems: EnrichedCartItem[] = orderData.items.map((item: CartItem) => {
      const found = PRODUCTS.find(p => p.id === item.productId);

      const productForEmail: Product | undefined = found
        ? {
            id: found.id,
            name: found.name,
            price: found.price,
            image: typeof found.image === 'string' ? found.image : (found.image?.src ?? '')
          }
        : undefined;

      return {
        ...item,
        product: productForEmail
      };
    });
    
    const enrichedOrderData: EnrichedOrderData = {
      ...orderData,
      items: enrichedItems
    };

    // Validate environment variables
    if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.error('SMTP credentials not configured');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    // Send email to store owner
    const storeOwnerEmail = await transporter.sendMail({
      from: `"Beauty Store" <${process.env.SMTP_USER}>`,
      to: process.env.STORE_EMAIL || process.env.SMTP_USER,
      subject: `🛍️ New Order from ${orderData.customer.firstName} ${orderData.customer.lastName}`,
      html: generateStoreOwnerEmail(enrichedOrderData),
    });

    console.log('Store owner email sent:', storeOwnerEmail.messageId);

    // Send confirmation email to customer
    const customerEmail = await transporter.sendMail({
      from: `"Beauty Store" <${process.env.SMTP_USER}>`,
      to: orderData.customer.email,
      subject: '✨ Order Confirmation - Thank You for Your Purchase!',
      html: generateCustomerEmail(enrichedOrderData),
    });

    console.log('Customer email sent:', customerEmail.messageId);

    // Optional: Save order to database here
    // await saveOrderToDatabase(enrichedOrderData);

    return NextResponse.json(
      {
        success: true,
        message: 'Order received and confirmation emails sent',
        orderId: Date.now(),
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Order processing error:', error);
    
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    
    return NextResponse.json(
      {
        error: 'Failed to process order',
        details: errorMessage
      },
      { status: 500 }
    );
  }
}