import { useLoaderData } from 'react-router';

const Bookings = () => {
  const services = useLoaderData();
  return (
    <div className="py-8">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Date</th>
              <th>price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {services.map((service) => (
              <tr key={service.id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={service?.logo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{service?.name}</div>
                      <div className="text-sm opacity-50">Party</div>
                    </div>
                  </div>
                </td>
                <td>
                  23 November 2023
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    United-State
                  </span>
                </td>
                <td>{service?.price}$</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
            ))}
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Date</th>
              <th>Price</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
