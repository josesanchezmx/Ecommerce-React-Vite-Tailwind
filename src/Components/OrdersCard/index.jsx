import { ChevronRightIcon } from '@heroicons/react/24/solid'

const OrdersCard = props => {
  const { date, totalPrice, totalProducts } = props;

  return (
    <div className="group relative bg-white shadow-lg rounded-xl overflow-hidden w-full max-w-96 mx-auto border border-gray-300 transform transition-all duration-500 hover:scale-105 mb-4">
      {/* Main Content */}
      <div className="relative z-10 p-6">
        {/* Date and Total Products */}
        <div className="mb-4 text-center">
          <p className="text-lg font-semibold text-gray-800">{date}</p>
          <p className="text-sm text-gray-600">{totalProducts} articles</p>
        </div>

        {/* Price and Chevron */}
        <div className="flex items-center justify-between mt-4">
          {/* Price centered */}
          <div className="flex-1 text-center">
            <span className="text-3xl font-extrabold text-gray-800">{`$${totalPrice}`}</span>
          </div>
          {/* Chevron icon to the right */}
          <ChevronRightIcon className="h-7 w-7 text-gray-500 cursor-pointer transition-colors duration-300 group-hover:text-gray-700" />
        </div>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
    </div>
  );
}

export default OrdersCard;
