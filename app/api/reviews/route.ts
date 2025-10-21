// app/api/reviews/route.ts
import { NextRequest, NextResponse } from 'next/server';

// In-memory database (replace with real database later)
let reviewsDatabase: any[] = [
  {
    id: '1',
    productId: 'product1',
    rating: 5,
    text: 'Excellent product! Very satisfied with my purchase. Highly recommended to everyone.',
    author: 'Sarah Johnson',
    date: '10/15/2025',
    verified: true,
  },
  {
    id: '2',
    productId: 'product1',
    rating: 4,
    text: 'Great quality and fast shipping. Would buy again!',
    author: 'Michael Chen',
    date: '10/12/2025',
    verified: true,
  },
  {
    id: '3',
    productId: 'product1',
    rating: 5,
    text: 'Absolutely love it! Exceeded my expectations. Perfect value for money.',
    author: 'Emma Wilson',
    date: '10/10/2025',
    verified: true,
  },
  {
    id: '4',
    productId: 'product2',
    rating: 4,
    text: 'Good product, meets all my needs. Delivery was quick.',
    author: 'James Patterson',
    date: '10/08/2025',
    verified: true,
  },
  {
    id: '5',
    productId: 'product2',
    rating: 5,
    text: 'Outstanding! Best purchase I have made in a long time.',
    author: 'Lisa Anderson',
    date: '10/05/2025',
    verified: true,
  },
];

// GET - Fetch all reviews
export async function GET(request: NextRequest) {
  try {
    // Optional: filter by productId query parameter
    const searchParams = request.nextUrl.searchParams;
    const productId = searchParams.get('productId');

    let filteredReviews = reviewsDatabase;

    if (productId) {
      filteredReviews = reviewsDatabase.filter(r => r.productId === productId);
    }

    return NextResponse.json(
      {
        success: true,
        data: filteredReviews,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Error fetching reviews',
      },
      { status: 500 }
    );
  }
}

// POST - Create a new review
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.author?.trim() || !body.text?.trim()) {
      return NextResponse.json(
        {
          success: false,
          message: 'Author and review text are required',
        },
        { status: 400 }
      );
    }

    const newReview = {
      id: Date.now().toString(),
      productId: body.productId,
      rating: body.rating || 5,
      text: body.text,
      author: body.author,
      date: new Date().toLocaleDateString(),
      verified: true,
    };

    // Add to database
    reviewsDatabase.unshift(newReview);

    console.log('Review added:', newReview);
    console.log('Total reviews:', reviewsDatabase.length);

    return NextResponse.json(
      {
        success: true,
        message: 'Review created successfully',
        data: newReview,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating review:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Error creating review',
      },
      { status: 500 }
    );
  }
}