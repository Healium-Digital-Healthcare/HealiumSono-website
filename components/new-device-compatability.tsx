import { Check, CheckCheck, Cpu, ScanLine, Shield, UserCog, Users } from "lucide-react"

export default function NewDeviceCompatability() {
  return (
    <section 
    className="py-20 2xl:py-32 bg-[#f9f8f7]"
    >
      <div className="container mx-auto px-4 lg:px-10 max-w-6xl">
        <div className="text-center opacity-100">
          <h2 className="text-4xl font-semibold tracking-[0] leading-tight text-[rgb(35,31,32)] mb-4">
            Device Compatibility
          </h2>
          <div className="space-y-4 max-w-4xl mx-auto">
            <p className="text-xl leading-relaxed text-[rgb(35,31,32)]">
              Works seamlessly with industry-standard ultrasound devices and modern web browsers
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
          {/* Published Evidence Card */}
          <div className="bg-white rounded-lg p-8 shadow-3xl shadow-[#F2EFEE]">
            <div className="flex items-center gap-2 mb-6 text-sm text-[rgb(84,75,72)]">
              <ScanLine className="w-6 h-6 " />
              <h3 className="text-2xl font-medium text-[#C084B8]">For the bedside scanner</h3>
            </div>

            <div className="">
              <div className="rounded-lg mx-auto mb-4 flex items-center justify-center">
                <div className="flex flex-col items-center gap-2">
                  <img src='/compatability/HEALIUM-Intelliscan-Device.png' alt="HEALIUM Intelliscan Device" className="h-44 w-auto object-contain"/>
                  <p className="text-[#9B7FB8]">HEALIUM Intelliscan Device</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-4">
                    <div className="w-5 h-5 mt-0.5 flex-shrink-0 rounded-full flex items-center justify-center">
                        <Check className="w-5 h-5 text-[#9B7FB8]" />
                    </div>
                    <span className="text-[18px] leading-[1.55] text-[rgb(84,75,72)]">
                        Wireless connectivity
                    </span>
                </li>
                <li className="flex items-center gap-4">
                    <div className="w-5 h-5 mt-0.5 flex-shrink-0 rounded-full flex items-center justify-center">
                        <Check className="w-5 h-5 text-[#9B7FB8]" />
                    </div>
                    <span className="text-[18px] leading-[1.55] text-[rgb(84,75,72)]">
                        AI-powered image optimization
                    </span>
                </li>
                <li className="flex items-center gap-4">
                    <div className="w-5 h-5 mt-0.5 flex-shrink-0 rounded-full flex items-center justify-center">
                        <Check className="w-5 h-5 text-[#9B7FB8]" />
                    </div>
                    <span className="text-[18px] leading-[1.55] text-[rgb(84,75,72)]">
                        Real-time streaming capability
                    </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Clinical Trial Results Card */}
          <div className="bg-white rounded-lg p-8 shadow-xl shadow-[#F2EFEE]">
            <div className="flex items-center gap-2 mb-6 text-sm text-[rgb(84,75,72)]">
              <UserCog className="w-6 h-6" />
              <h3 className="text-2xl font-medium text-[#9B7FB8]">For the trained practitioner</h3>
            </div>

            <div className="mb-6">
                <div className="rounded-lg mx-auto flex items-center justify-center gap-8 mb-8">
                    <div className="flex flex-col items-center">
                    <img src='/compatability/chrome.svg' className="w-24 h-24"/>
                    </div>
                    <div className="flex flex-col items-center">
                    <img src='/compatability/safari.svg' className="w-24 h-24"/>
                    </div>
                </div>
                <div className="flex flex-col items-center mb-8">
                    <p className="text-[#9B7FB8] text-lg">Latest version of</p>
                    <p className="text-[#687FE5] text-lg">Chrome and Safari on a computer.</p>
                </div>
                
              <ul className="space-y-3">
                <li className="flex items-center gap-4">
                    <div className="w-5 h-5 mt-0.5 flex-shrink-0 rounded-full flex items-center justify-center">
                        <Check className="w-5 h-5 text-[#9B7FB8]" />
                    </div>
                    <span className="text-[18px] leading-[1.55] text-[rgb(84,75,72)]">
                        Cross-platform compatibility
                    </span>
                </li>
                <li className="flex items-center gap-4">
                    <div className="w-5 h-5 mt-0.5 flex-shrink-0 rounded-full flex items-center justify-center">
                        <Check className="w-5 h-5 text-[#9B7FB8]" />
                    </div>
                    <span className="text-[18px] leading-[1.55] text-[rgb(84,75,72)]">
                        Secure cloud-based access
                    </span>
                </li>
                <li className="flex items-center gap-4">
                    <div className="w-5 h-5 mt-0.5 flex-shrink-0 rounded-full flex items-center justify-center">
                        <Check className="w-5 h-5 text-[#9B7FB8]" />
                    </div>
                    <span className="text-[18px] leading-[1.55] text-[rgb(84,75,72)]">
                        No software installation required
                    </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center max-w-4xl mb-8 mx-auto opacity-100">
          <p className="text-2xl font-medium text-[rgb(35,31,32)]">
            Need help with device setup? Contact our support team
          </p>
        </div>
      </div>
    </section>
  )
}
