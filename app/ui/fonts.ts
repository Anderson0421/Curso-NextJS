import { Inter, Lusitana } from 'next/font/google'

export const inter = Inter({ subsets: ['latin']})

export const lusitana = Lusitana({ subsets: ['latin'], weight: ['400', '700']})

// Colocamos latin como subset para que se cargue el alfabeto latino en la fuente
// De esta forma, si el texto contiene caracteres latinos, se mostrarán correctamente
// y aporta en el rendimiento de la carga de la fuente.