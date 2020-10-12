import { formatDate } from '../utils/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw, faBaby } from '@fortawesome/free-solid-svg-icons';
import { Patio, Garage, Bedroom, Bathroom, Inmobiliaria, Particular } from './icons';

export default function RentCard({ rent }) {
  const { title, description, location, isparticular, warranties, images, price, features, user, createdAt } = rent;

  return (
    <div className="w-full mb-3">
      <div className="sm:max-w w-full lg:max-w-full lg:flex">
        <div
          className="rent-image lg:h-auto lg:w-1/3 lg:rounded-t-none lg:rounded-l"
          style={{ backgroundImage: `url(${images[0]})`, position: 'relative' }} title={title}
        >
        </div>
        <div className="w-full border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <p className="flex justify-between text-sm text-gray-600 flex items-center pb-2">
              {location.village}, {location.city} <span>{formatDate(createdAt)}</span>
            </p>
            <div className="text-gray-900 font-bold text-xl mb-2">{title} · <span className="text-gray-600">${price}</span></div>
            <p className="text-gray-700 text-base">{description}</p>

            <ul className="flex sm:w-full md:w-3/4 pt-3 justify-between">
              <li className="feature">
                <Bedroom color={'fill-black'} size={32} />
                <span style={{ marginLeft: '.4em' }} className="font-semibold">
                  {features.bedrooms}
                </span>
              </li>
              <li className="feature">
                <Bathroom color={'fill-black'} size={32} />
                <span style={{ marginLeft: '.4em' }} className="font-semibold">
                  {features.bathrooms}
                </span>
              </li>
              <li className="feature text-xs">
                <Patio color={features.exterior ? 'fill-green' : 'fill-red'} size={24} />
                <span style={{ marginLeft: '.4em' }} className='font-semibold'>
                  {features.exterior ? '' : 'No'} Patio
                </span>
              </li>
            </ul>

            <ul className="flex sm:w-full md:w-3/4 pt-3 justify-between">
              <li className="feature text-xs">
                <Garage color={features.garage ? 'fill-green' : 'fill-red'} size={30} />
                <span style={{ marginLeft: '.4em' }} className='font-semibold'>
                  {features.garage ? '' : 'No'} Garage
                </span>
              </li>
              <li className="feature text-xs">
                <FontAwesomeIcon icon={faPaw} width={24} className={(features.petsallowed ? 'text-green-600' : 'text-red-600')} />
                <span style={{ marginLeft: '.4em' }} className='font-semibold'>
                  {features.petsallowed ? '' : 'No'} Mascotas
                </span>
              </li>
              <li className="feature text-xs">
                <FontAwesomeIcon icon={faBaby} width="20" className={features.childrenallowed ? 'text-green-600' : 'text-red-600'} />
                <span style={{ marginLeft: '.4em' }} className='font-semibold'>
                  {features.childrenallowed ? '' : 'No'} Chicos
                </span>
              </li>
            </ul>

            <span className="flex text-base pt-4 font-semibold">
              {rent.isparticular ? <> <Particular color={'fill-black'} size={34} className="mr-2" /> Particular </> : <> <Inmobiliaria color={'fill-black'} size={40} className="mr-0" /> Inmobiliaria </>}
            </span>
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