import React from 'react';

interface TableTitleProps {
  title: string;
}
export default function TableTitle({ title }: TableTitleProps) {
  return <h1>{title}</h1>;
}
