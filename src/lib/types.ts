export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  isVeg: boolean;
  categoryId: string;
}

export interface MenuCategory {
  id: string;
  name: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}
