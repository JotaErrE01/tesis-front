import { LucideProps, PencilRuler, Shapes, ShoppingBasket, Store, Users } from "lucide-react"
import { RefAttributes } from "react"
import { Link } from "react-router-dom"

const cards = [
  {
    label: 'Usuarios',
    count: 10,
    icon: (props: Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>) => <Users {...props} />,
    href: '/admin/users',
    bgColor: 'bg-rose-500',
  },
  {
    label: 'Productos',
    count: 10,
    icon: (props: Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>) => <Store {...props} />,
    href: '/admin/products',
    bgColor: 'bg-indigo-400',
  },
  {
    label: 'Categorías',
    count: 10,
    icon: (props: Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>) => <Shapes {...props} />,
    href: '/admin/categories',
    bgColor: 'bg-green-400',
  },
  {
    label: 'Unidad de Medida',
    count: 10,
    icon: (props: Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>) => <PencilRuler {...props} />,
    href: '/admin/units',
    bgColor: 'bg-purple-400',
  },
  {
    label: 'Producto Padre',
    count: 10,
    icon: (props: Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>) => <ShoppingBasket {...props} />,
    href: '/admin/predefined-products',
    bgColor: 'bg-orange-400',
  }
]

export function AdminPage() {
  return (
    <div>
      <h1 className="text-center mt-14 font-bold text-4xl">Vista Administrativa</h1>

      <div className="mx-auto mt-12 flex flex-wrap justify-center gap-10">
        {
          cards.map((card) => (
            <Link to={card.href} key={card.label} className={`flex justify-center items-center p-4 rounded-md border hover:scale-105 transition-transform duration-300 ease-in-out hover:cursor-pointer basis-1/3 ${card.bgColor} h-52`}>
              <div className="flex items-center space-x-10 text-white">
                <div className={`rounded-full ${card.bgColor}`}>
                  {
                    card.icon({
                      height: 82,
                      width: 82,
                    })
                  }
                </div>

                <div className="text-center font-bold">
                  <p className="text-5xl font-semibold">
                    {card.count}
                  </p>
                  <h2 className="text-4xl">{card.label}</h2>
                </div>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  )
}
