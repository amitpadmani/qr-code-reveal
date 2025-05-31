
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const DataDisplay: React.FC = () => {
  const userData = [
    { key: 'Name', value: 'John Doe' },
    { key: 'Email', value: 'john.doe@example.com' },
    { key: 'Phone', value: '+1 (555) 123-4567' },
    { key: 'Department', value: 'Software Engineering' },
    { key: 'Employee ID', value: 'EMP-2024-001' },
    { key: 'Access Level', value: 'Level 3 - Senior' },
    { key: 'Location', value: 'New York Office' },
    { key: 'Join Date', value: 'January 15, 2022' }
  ];

  return (
    <div className="w-full max-w-2xl mx-auto animate-fadeIn">
      <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
        <CardHeader className="text-center pb-6">
          <CardTitle className="text-3xl font-bold text-gray-800">
            User Information
          </CardTitle>
          <p className="text-gray-600 mt-2">
            QR Code verified successfully. Here's your data:
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          {userData.map((item, index) => (
            <div 
              key={item.key}
              className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'slideInFromRight 0.5s ease-out forwards'
              }}
            >
              <span className="font-medium text-gray-700 flex-1">
                {item.key}:
              </span>
              <span className="text-gray-900 font-semibold flex-2 text-right">
                {item.value}
              </span>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default DataDisplay;
