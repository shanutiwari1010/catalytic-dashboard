function MapView() {
  return (
    <div >
      <div className="flex m-4 mb-2 gap-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448193.95104890317!2d76.76356158799183!3d28.644287349138324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1710829674932!5m2!1sen!2sin"
          width="225"
          height="150"
          // style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="bg-cyan-950 w-full mx-10 text-white flex justify-center">
          <p>Device Report</p>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default MapView;
