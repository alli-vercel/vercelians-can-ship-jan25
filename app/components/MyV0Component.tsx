'use client'

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

// This would typically come from your state or database
const walks = [
  { id: 1, dogName: 'Buddy', date: '2023-06-15', time: '14:00' },
  { id: 2, dogName: 'Max', date: '2023-06-16', time: '10:00' },
  { id: 3, dogName: 'Luna', date: '2023-06-17', time: '16:30' },
]

export default function WalkList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Walks</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {walks.map((walk) => (
            <li key={walk.id} className="bg-gray-100 p-4 rounded-md">
              <p className="font-bold">{walk.dogName}</p>
              <p>{walk.date} at {walk.time}</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

