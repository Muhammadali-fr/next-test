export type Products = {
    id: string;
    image: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    categoryId: string;
}

export type Todo = {
  userId: number;
  id: number;
  body: string;
  title: string;
};