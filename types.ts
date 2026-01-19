
export interface Product {
  id: number;
  name: string;
  brand: 'GEMM' | 'CLABO' | 'ICETEAM 1927';
  category: string;
  image: string;
  specs: {
    dimensions: string;
    power: string;
    capacity: string;
    description: string;
  };
}

export interface Category {
  id: string;
  label: string;
  icon: string;
}
