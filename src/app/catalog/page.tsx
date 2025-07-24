'use client';

import React, { useState } from 'react';
import { Search, Grid, List, Star, BookOpen, Eye, Heart } from 'lucide-react';

export default function CatalogPage() {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Sample book data dengan foto dari online
  const books = [
    {
      id: 1,
      title: "The Great Adventure",
      author: "John Doe",
      category: "fiction",
      rating: 4.5,
      views: 1250,
      likes: 89,
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop"
    },
    {
      id: 2,
      title: "Learning React",
      author: "Jane Smith",
      category: "technology",
      rating: 4.8,
      views: 2100,
      likes: 156,
      image: "https://images.unsplash.com/photo-1555949963-ff9fe52c4b20?w=400&h=600&fit=crop"
    },
    {
      id: 3,
      title: "Mystery of the Forest",
      author: "Mike Johnson",
      category: "mystery",
      rating: 4.2,
      views: 980,
      likes: 67,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop"
    },
    {
      id: 4,
      title: "Science Explained",
      author: "Sarah Wilson",
      category: "science",
      rating: 4.6,
      views: 1750,
      likes: 124,
      image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=600&fit=crop"
    },
    {
      id: 5,
      title: "History Chronicles",
      author: "Robert Brown",
      category: "history",
      rating: 4.3,
      views: 890,
      likes: 45,
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop"
    },
    {
      id: 6,
      title: "Modern Art Guide",
      author: "Emily Davis",
      category: "art",
      rating: 4.7,
      views: 1320,
      likes: 98,
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=600&fit=crop"
    },
    {
      id: 7,
      title: "Cooking Masterclass",
      author: "Chef Antonio",
      category: "cooking",
      rating: 4.9,
      views: 2800,
      likes: 234,
      image: "https://images.unsplash.com/photo-1544716278-e513176f20a5?w=400&h=600&fit=crop"
    },
    {
      id: 8,
      title: "Adventure Tales",
      author: "Lisa Chen",
      category: "fiction",
      rating: 4.4,
      views: 1450,
      likes: 87,
      image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Books', count: books.length },
    { id: 'fiction', label: 'Fiction', count: books.filter(b => b.category === 'fiction').length },
    { id: 'technology', label: 'Technology', count: books.filter(b => b.category === 'technology').length },
    { id: 'science', label: 'Science', count: books.filter(b => b.category === 'science').length },
    { id: 'mystery', label: 'Mystery', count: books.filter(b => b.category === 'mystery').length },
    { id: 'history', label: 'History', count: books.filter(b => b.category === 'history').length },
    { id: 'art', label: 'Art', count: books.filter(b => b.category === 'art').length },
    { id: 'cooking', label: 'Cooking', count: books.filter(b => b.category === 'cooking').length },
  ];

  const filteredBooks = selectedCategory === 'all' 
    ? books 
    : books.filter(book => book.category === selectedCategory);

  const BookCard = ({ book }: { book: any }) => (
    <div className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl overflow-hidden border border-gray-700/30 hover:border-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 backdrop-blur-sm">
      {/* Book Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-700/30">
        <div 
          className="w-full h-full bg-center bg-cover transition-transform duration-500 group-hover:scale-110"
          style={{ 
            backgroundImage: `url(${book.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Fallback content jika gambar tidak load */}
          <div className="w-full h-full bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center opacity-0 transition-opacity duration-300 bg-blend-overlay">
            <BookOpen className="h-12 w-12 text-white/80" />
          </div>
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
        
        {/* Action Buttons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <button className="p-2 bg-black/50 hover:bg-black/70 rounded-full backdrop-blur-sm transition-colors duration-200">
            <Heart className="h-4 w-4 text-white hover:text-red-400" />
          </button>
          <button className="p-2 bg-black/50 hover:bg-black/70 rounded-full backdrop-blur-sm transition-colors duration-200">
            <Eye className="h-4 w-4 text-white hover:text-blue-400" />
          </button>
        </div>

        {/* Rating Badge */}
        <div className="absolute top-3 left-3 flex items-center gap-1 bg-black/60 backdrop-blur-sm rounded-full px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
          <span className="text-xs text-white font-medium">{book.rating}</span>
        </div>
      </div>

      {/* Book Info */}
      <div className="p-4">
        <h3 className="font-bold text-white text-lg mb-1 line-clamp-1 group-hover:text-blue-300 transition-colors duration-200">
          {book.title}
        </h3>
        <p className="text-gray-400 text-sm mb-3 line-clamp-1">{book.author}</p>
        
        <div className="flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Eye className="h-3 w-3" />
              {book.views.toLocaleString()}
            </span>
            <span className="flex items-center gap-1">
              <Heart className="h-3 w-3" />
              {book.likes}
            </span>
          </div>
          <span className="capitalize bg-gray-700/50 px-2 py-1 rounded-full text-gray-300">
            {book.category}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Book Catalog
          </h1>
          <p className="text-gray-400">Discover and explore our collection of amazing books</p>
        </div>

        {/* Filters and Controls */}
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/30 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="search"
                placeholder="Search books..."
                className="pl-10 pr-4 py-3 w-full bg-gray-700/50 border border-gray-600/50 text-white placeholder-gray-400 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              />
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2 bg-gray-700/50 rounded-xl p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  viewMode === 'grid' 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'text-gray-400 hover:text-white hover:bg-gray-600/50'
                }`}
              >
                <Grid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  viewMode === 'list' 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'text-gray-400 hover:text-white hover:bg-gray-600/50'
                }`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mt-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 hover:text-white'
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Books Grid */}
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5' 
            : 'grid-cols-1'
        }`}>
          {filteredBooks.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>

        {/* Empty State */}
        {filteredBooks.length === 0 && (
          <div className="text-center py-16">
            <BookOpen className="h-16 w-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-400 mb-2">No books found</h3>
            <p className="text-gray-500">Try adjusting your filters or search terms</p>
          </div>
        )}

      </div>
    </div>
  );
}