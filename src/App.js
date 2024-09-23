import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Grid } from 'lucide-react';
const categories = ['All', 'Documents', 'Reports', 'Presentations'];

const pdfData = [
  { id: 1, title: 'Annual Report', category: 'Reports', imageUrl: '/api/placeholder/300/400' },
  { id: 2, title: 'Project Proposal', category: 'Documents', imageUrl: '/api/placeholder/300/400' },
  { id: 3, title: 'Sales Presentation', category: 'Presentations', imageUrl: '/api/placeholder/300/400' },
  { id: 4, title: 'Financial Statement', category: 'Reports', imageUrl: '/api/placeholder/300/400' },
  { id: 5, title: 'Meeting Minutes', category: 'Documents', imageUrl: '/api/placeholder/300/400' },
  { id: 6, title: 'Product Launch', category: 'Presentations', imageUrl: '/api/placeholder/300/400' },
];

const PDFPreviewGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPDFs = selectedCategory === 'All'
    ? pdfData
    : pdfData.filter(pdf => pdf.category === selectedCategory);}

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">PDF Preview Grid</h1>
      
      <div className="flex space-x-2 mb-4">
        {categories.map(category => (
          <Button
            key={category}
            onClick={() => setSelectedCategory(category)}
            variant={selectedCategory === category ? 'default' : 'outline'}
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredPDFs.map(pdf => (
          <Card key={pdf.id} className="overflow-hidden">
            <CardHeader className="p-4">
              <CardTitle className="text-lg">{pdf.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <img src={pdf.imageUrl} alt={pdf.title} className="w-full h-auto" />
            </CardContent>
            <div className="p-4 flex justify-between items-center">
              <span className="text-sm text-gray-500">{pdf.category}</span>
              <Button size="sm" variant="outline">
                <Grid className="w-4 h-4 mr-2" />
                View
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default PDFPreviewGrid;
