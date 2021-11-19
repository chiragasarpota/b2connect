export default function GeoLocationDetails(props) {
  return (
    <div class="bg-white max-w-2xl mb-5 shadow overflow-hidden sm:rounded-lg">
      <div class="border-t border-gray-200">
        <dl>
          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-xl font-medium text-gray-500">IP Address</dt>
            <dd class="mt-1 text-xl text-gray-900 sm:mt-0 sm:col-span-2">
              {props.data.query}
            </dd>
          </div>
          <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-xl font-medium text-gray-500">Country</dt>
            <dd class="mt-1 text-xl text-gray-900 sm:mt-0 sm:col-span-2">
              {props.data.country}
            </dd>
          </div>
          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-xl font-medium text-gray-500">Region</dt>
            <dd class="mt-1 text-xl text-gray-900 sm:mt-0 sm:col-span-2">
              {props.data.regionName}
            </dd>
          </div>
          <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-xl font-medium text-gray-500">City</dt>
            <dd class="mt-1 text-xl text-gray-900 sm:mt-0 sm:col-span-2">
              {props.data.city}
            </dd>
          </div>
          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-xl font-medium text-gray-500">ISP</dt>
            <dd class="mt-1 text-xl text-gray-900 sm:mt-0 sm:col-span-2">
              {props.data.isp}
            </dd>
          </div>
          <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-xl font-medium text-gray-500">Organization</dt>
            <dd class="mt-1 text-xl text-gray-900 sm:mt-0 sm:col-span-2">
              {props.data.org}
            </dd>
          </div>
          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-xl font-medium text-gray-500">Latitude</dt>
            <dd class="mt-1 text-xl text-gray-900 sm:mt-0 sm:col-span-2">
              {props.data.lat}
            </dd>
          </div>
          <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-xl font-medium text-gray-500">Longitude</dt>
            <dd class="mt-1 text-xl text-gray-900 sm:mt-0 sm:col-span-2">
              {props.data.lon}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
