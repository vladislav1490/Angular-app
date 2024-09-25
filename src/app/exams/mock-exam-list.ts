export interface Exam {
    id: number;
    name: string;
    mark: string;
    enrollee: string;
  }
  
  export const EXAM_LIST: Exam[] = [
    { id: 1, name: 'Math', mark: '10', enrollee: 'Rudnev' },
    { id: 2, name: 'Physics', mark: '8', enrollee: 'Ivanov' },
    { id: 3, name: 'Chemistry', mark: '9', enrollee: 'Petrova' },
    { id: 4, name: 'Biology', mark: '7', enrollee: 'Sidorov' },
    { id: 5, name: 'History', mark: '6', enrollee: 'Kozlova' },
    { id: 6, name: 'English', mark: '9', enrollee: 'Smirnov' },
    { id: 7, name: 'Geography', mark: '8', enrollee: 'Fedorov' },
    { id: 8, name: 'Computer Science', mark: '10', enrollee: 'Romanov' },
    { id: 9, name: 'Economics', mark: '7', enrollee: 'Nikolaev' },
    { id: 10, name: 'Art', mark: '9', enrollee: 'Vasilieva' }
  ];
  
  