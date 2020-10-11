import { formatDate } from '../utils/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw, faBed, faWarehouse, faToilet, faBaby, faTree, faBan } from '@fortawesome/free-solid-svg-icons';
import Patio from './icons/Patio';
import Garage from './icons/Garage';

export default function RentCard({ rent }) {
  const { title, description, location, images, price, features, user, createdAt } = rent;

  return (
    <div className="w-full mb-3">
      <div className="sm:max-w w-full lg:max-w-full lg:flex">
        <div
          className="rent-image lg:h-auto lg:w-1/3 lg:rounded-t-none lg:rounded-l"
          style={{ backgroundImage: `url(${images[0]})` }} title={title}
        >
        </div>
        <div className="w-full border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <p className="flex justify-between text-sm text-gray-600 flex items-center pb-2">
              {location.village}, {location.city} <span>{formatDate(createdAt)}</span>
            </p>
            <div className="text-gray-900 font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 text-base">{description}</p>

            <ul className="flex sm:w-full md:w-3/4 pt-3 justify-between">
              <li className="feature">
                <FontAwesomeIcon icon={faBed} width={24} className="text-gray-800" pulse />
                <span style={{ marginLeft: '.4em' }} className="font-semibold">
                  {features.bedrooms}
                </span>
              </li>
              <li className="feature">
                <FontAwesomeIcon icon={faToilet} width={22} className="text-gray-800" />
                <span style={{ marginLeft: '.4em' }} className="font-semibold">
                  {features.bathrooms}
                </span>
              </li>
              <li className="feature">
                <Patio color={features.exterior ? 'fill-green' : 'fill-red'} size={22} /> Patio
              </li>
            </ul>

            <ul className="flex sm:w-full md:w-3/4 pt-3 justify-between">
              <li className="feature">
                {/* <Garage color={features.garage ? 'fill-green' : 'fill-red'} /> Garage */}
              </li>
              <li className="feature">
                <FontAwesomeIcon icon={faPaw} width={24} className={features.petsallowed ? 'text-green-600' : 'text-red-600'} /> Mascotas
              </li>
              <li className="feature">
                <FontAwesomeIcon icon={faBaby} width="22" className={features.childrenallowed ? 'text-green-600' : 'text-red-600'} />
                Chicos
              </li>
            </ul>

            <p className="text-base pt-4 font-semibold">${price}</p>
          </div>
          <div className="flex items-center">
            <img className="w-10 h-10 rounded-full mr-4" src={images[1]} alt={`Foto de ${user.name}`} />
            <div className="text-sm">
              <p className="text-gray-900 leading-none">{user.name} {user.whatsapp}</p>
              <p className="text-gray-600">{user.phonenumber}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}