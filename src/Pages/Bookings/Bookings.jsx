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
                <td>{service?.price}</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
            ))}
            {/* row 2 */}
            <tr>
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
                        src="https://i.ibb.co/5k4hW1p/anniversary.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Anniversary</div>
                    <div className="text-sm opacity-50">Party</div>
                  </div>
                </div>
              </td>
              <td>
                23 November 2023
                <br />
                <span className="badge badge-ghost badge-sm">United-State</span>
              </td>
              <td>5000$</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
            {/* row 3 */}
            <tr>
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
                        src="https://i.ibb.co/k8Hw07p/baby-Shower.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Baby Shower</div>
                    <div className="text-sm opacity-50">Los-Angels</div>
                  </div>
                </div>
              </td>
              <td>
                23 November 2023
                <br />
                <span className="badge badge-ghost badge-sm">New-York</span>
              </td>
              <td>200$</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
            {/* row 4 */}
            <tr>
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
                        src="https://i.ibb.co/kqsk6y5/birthday.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Birthday</div>
                    <div className="text-sm opacity-50">Party</div>
                  </div>
                </div>
              </td>
              <td>
                23 November 2023
                <br />
                <span className="badge badge-ghost badge-sm">Canada</span>
              </td>
              <td>300$</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
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
