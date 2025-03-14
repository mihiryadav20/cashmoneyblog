// src/app/api/users/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();

    // Check if user already exists
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { email: body.email },
          { username: body.username }
        ]
      }
    });

    if (existingUser) {
      return NextResponse.json(
        { error: 'User already exists' }, 
        { status: 400 }
      );
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(body.password, salt);

    // Create new user
    const newUser = await prisma.user.create({
      data: {
        username: body.username,
        email: body.email,
        password: hashedPassword
      },
      // Exclude password from response
      select: {
        id: true,
        username: true,
        email: true,
        createdAt: true
      }
    });

    // Return success response
    return NextResponse.json(
      { 
        message: 'User created successfully',
        user: newUser
      }, 
      { status: 201 }
    );
  } catch (error) {
    console.error('User creation error:', error);
    
    return NextResponse.json(
      { error: 'Error creating user' }, 
      { status: 500 }
    );
  }
}