import {
  FaTruckFast,
  FaHeadset,
  FaRotateLeft,
  FaScrewdriverWrench,
} from 'react-icons/fa6';

const features = [
  {
    icon: FaTruckFast,
    title: 'Fast delivery',
    description: 'Early shipping on every order',
  },
  {
    icon: FaHeadset,
    title: 'Support 24/7',
    description: 'Online, every day',
  },
  {
    icon: FaRotateLeft,
    title: '7-day money back',
    description: 'Return guarantee',
  },
  {
    icon: FaScrewdriverWrench,
    title: 'Service comes first',
    description: 'Install, repair and upgrade',
  },
];

export default function TrustStrip() {
  return (
    <section className="border-y border-line bg-paper py-5">
      <div className="wrap grid grid-cols-2 gap-5 md:grid-cols-4">
        {features.map(({ icon: Icon, title, description }) => (
          <div key={title} className="flex items-center gap-4">
            <Icon className="shrink-0 text-2xl text-cable" />
            <div>
              <h3 className="font-bold text-ink">{title}</h3>
              <p className="text-sm text-mut">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}