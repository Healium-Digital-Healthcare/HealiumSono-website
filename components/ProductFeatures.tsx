"use client"
import Image from "next/image"

interface Feature {
  icon: string,
  title: string,
  description: string
}

const features: Feature[] = [
  {
    icon: '/features/icon1.png',
    title: 'Enhanced Visualization',
    description: 'Leveraging AI to create detailed ultrasound images that reveal intricate kidney structures, facilitating the early detection of CKD.'
  },
  {
    icon: '/features/icon2.png',
    title: 'Dynamic Scans Analysis',
    description: 'Utilizing AI for real-time processing of ultrasound videos, allowing nephrologists to observe kidney function and flow dynamics in action for precise CKD monitoring.'
  },
  {
    icon: '/features/icon3.png',
    title: 'Predictive Analytics',
    description: 'Deep learning algorithms analyze ultrasound data to predict CKD progression, enabling proactive treatment adjustments and better patient outcomes.'
  },
  {
    icon: '/features/icon4.png',
    title: 'Scalable Screening',
    description: 'Our technology scales to meet the needs of growing patient populations, ensuring that high-risk individuals receive timely CKD screening with AI-augmented ultrasound.'
  },
  {
    icon: '/features/icon5.png',
    title: 'Secure Data Handling',
    description: 'State-of-the-art encryption and privacy measures protect sensitive patient data generated from ultrasound scans, maintaining confidentiality in CKD diagnosis and treatment.'
  },
  {
    icon: '/features/icon6.png',
    title: 'Knowledge Empowerment',
    description: 'Crafting specialized educational materials that elucidate the predictive capabilities of AI-powered ultrasounds in CKD, empowering patients with knowledge for proactive disease management.'
  },
  {
    icon: '/features/icon7.png',
    title: 'Continuous Care',
    description: 'Utilizing AI to monitor CKD markers in ultrasound data, triggering timely alerts for critical changes, ensuring prompt intervention and individualized patient care plans.'
  },
  {
    icon: '/features/icon8.png',
    title: 'Intelligent Insights',
    description: 'Advanced AI algorithms process and analyze ultrasound imaging data to uncover hidden patterns and trends, providing deep insights into CKD detection and progression risk factors.'
  }
]

export function ProductFeatures() {

  return (
    <section id="features" className="container mx-auto px-4 py-16 sm:py-10 sm:px-20">
      <div className="relative flex items-center justify-center">
        <Image src='/device/OB-GYN.png' alt="" height={200}/>
      </div>
      <div className="flex flex-col items-center justify-center my-2 gap-2">
        <p className="text-xl font-bold text-center">Healium Ultrasound Device for CKD Detection and  Management</p>
        <h2 className="mb-8 text-center font-normal opacity-50">
          Optimize CKD detection and management with the Healium Ultrasound Device, merging superior AI technology with clinical precision.
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {
          features.map((feature) => (
            <div className="">
              <div className="relative flex items-center justify-center">
                <Image src={feature.icon} alt="" width={80} height={50}/>
              </div>
              <div className="flex flex-col items-center justify-center my-2 gap-2">
                <p className="text-xl font-bold text-center">{feature.title}</p>
                <h2 className="mb-8 text-center font-normal opacity-50">
                  {feature.description}
                </h2>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}