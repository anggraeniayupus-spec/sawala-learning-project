// Interface untuk menentukan struktur data User di TypeScript

export interface User {
  id: number;
  name: string;
  isActive: boolean;
}

// Contoh objek user yang mengikuti interface di atas
export const userUtama: User = {
  id: 1,
  name: "Budi Ganteng",
  isActive: true,
};
