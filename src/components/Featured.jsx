import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Automated Foam Systems",
    description:
      "Foam systems protect virtually any hazard where flammable liquids are present. These hazards are common to a multitude of industries including Petrochemical, Chemical, Oil and Gas, Aviation, Marine/Offshore, Manufacturing, Utilities, Military, and Transportation.Flammable Liquid Storage Loading Racks Processing Areas Refineries Dike Areas Aircraft Hangars Heliports Jet Engine Test Facilities LNG",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Fire Alarm System",
    description:
      "Fire Alarm System An automatic fire alarm system is designed to detect the unwanted presence of fire by monitoring environmental changes associated with combustion. In general, a fire alarm system is either classified as automatically actuated, manually actuated, or both. Automatic fire alarm systems can be used to notify people.",
    icon: LockClosedIcon,
  },
  {
    name: "Fire & Smoke Detection",
    description:
      "A smoke detector is a device that detects smoke, typically as an indicator of fire. Commercial, industrial, and mass residential devices issue a signal to a fire alarm system, while household detectors, known as smoke alarms, generally issue a local audible and/or visual alarm from the detector itself. Smoke detectors",
    icon: ArrowPathIcon,
  },
  {
    name: "Gas Suppresion Systems",
    description:
      "Gaseous fire suppression is a term to describe the use of inert gases and chemical agents to extinguish a fire . Also called Clean Agent Fire Suppression. These Agents are governed by the NFPA Standard for Clean Agent Fire Extinguishing Systems – NFPA 2001. The system typically consists of the.",
    icon: FingerPrintIcon,
  },
];

export default function Featured() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center sm:text-center">
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            Everything you need to deploy
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-red-900">
                    <feature.icon
                      aria-hidden="true"
                      className="size-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
