"use client"

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Check, MapPin, Mail, PhoneCall, Clock } from "lucide-react"

const demoSchema = z.object({
  firstName: z.string().min(1, { message: 'First name is required' }),
  lastName: z.string().min(1, { message: 'Last name is required' }),
  company: z.string().min(1, { message: 'Company name is required' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string().min(1, { message: 'Phone number is required' }),
  message: z.string().min(1, { message: 'Message is required' }),
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: 'You must accept the terms and conditions',
  }),
})

type DemoFormValues = z.infer<typeof demoSchema>

export function RequestDemoSection() {
  const [loading, setLoading] = useState(false)
  const form = useForm<DemoFormValues>({
    resolver: zodResolver(demoSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      company: "",
      email: "",
      phone: "",
      message: "",
      acceptTerms: false,
    },
  })

  async function onSubmit(values: DemoFormValues) {
    try {
      setLoading(true)
      const res = await fetch("/api/demo-booking/request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: values.firstName,
          lastName: values.lastName,
          company: values.company,
          email: values.email,
          phone: values.phone,
          message: values.message,
          terms: values.acceptTerms,
        }),
      })

      if (!res.ok) throw new Error("Failed to submit request")
      toast.success("Demo booked successfully! We will contact you soon.")
      form.reset()
    } catch (err: any) {
      toast.error(err.message || "Something went wrong, please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="bg-[#f9f8f7] py-20 2xl:py-32 px-8 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Upper grid: Info + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left content */}
          <div className="lg:col-span-2 space-y-6 flex-1">
            <button className="border border-[#C8B5E8] text-[#2D2D2D] px-4 py-2 rounded-full text-sm font-medium">
              Get Started Today
            </button>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-[#2D2D2D]">
              Ready to Experience the <br /> Diagnostic Revolution?
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Join healthcare facilities worldwide that trust Healiumsono for
              AI-powered remote ultrasound diagnostics.
            </p>

            <ul className="space-y-2 text-gray-700">
              {[
                "Free demo and consultation",
                "No long-term contracts required",
                "Seamless integration with existing workflows",
                "Dedicated support team",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-black" /> {item}
                </li>
              ))}
            </ul>

            <div className="flex gap-10 pt-6 text-gray-900 font-semibold">
              <div>
                <p className="text-2xl font-bold">24/7</p>
                <p className="text-sm text-gray-600">Expert Coverage</p>
              </div>
              <div>
                <p className="text-2xl font-bold">&lt;70%</p>
                <p className="text-sm text-gray-600">Cost Reduction</p>
              </div>
              <div>
                <p className="text-2xl font-bold">100%</p>
                <p className="text-sm text-gray-600">HIPAA Compliant</p>
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className="bg-white rounded-lg p-8 shadow-xl shadow-[#F2EFEE]">
            <h3 className="text-xl font-semibold mb-6 text-gray-900">
              Request a Demo
            </h3>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#2D2D2D]">First Name *</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Dr. John"
                            {...field}
                            className="border-gray-300 focus-visible:ring-[#4981F8]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#2D2D2D]">Last Name *</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Smith"
                            {...field}
                            className="border-gray-300 focus-visible:ring-[#4981F8]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#2D2D2D]">Company *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your company / hospital name"
                          {...field}
                          className="border-gray-300 focus-visible:ring-[#4981F8]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#2D2D2D]">Email Address *</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="john.smith@hospital.com"
                          {...field}
                          className="border-gray-300 focus-visible:ring-[#4981F8]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#2D2D2D]">Phone Number *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your phone number"
                          {...field}
                          className="border-gray-300 focus-visible:ring-[#4981F8]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#2D2D2D]">Message *</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={4}
                          placeholder="Tell us about your facility and needs..."
                          {...field}
                          className="text-[#2D2D2D] border-gray-300 focus-visible:ring-[#4981F8]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="acceptTerms"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 pt-2">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="data-[state=checked]:bg-[#C8B5E8] data-[state=checked]:border-[#C8B5E8]"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-xs text-gray-700 font-normal">
                          I accept the Terms and Conditions
                        </FormLabel>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button 
                type="submit"
                disabled={loading}
                className="w-full bg-[#C8B5E8] text-[#2D2D2D] hover:bg-[#B8A5D8] rounded-md py-2 mt-2 font-medium cursor-pointer"
                >
                  {loading ? "Submitting..." : "Submit"}
                </Button>
              </form>
            </Form>

            <p className="text-xs text-gray-500 mt-4 text-center">
              By submitting this form, you agree to our privacy policy. We’ll never
              share your information.
            </p>
          </div>
        </div>

        {/* Contact Info Cards Grid Below Booking */}
        <div className="mt-16 pt-16 border-t border-gray-200/80 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Main Address */}
          <div className="bg-white rounded-2xl p-6 shadow-lg shadow-[#F2EFEE] border border-gray-100 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 rounded-full bg-[#F0EBFA] text-[#687FE5] flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-[#2D2D2D] mb-2">Main Address</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              26 Broadway Suite 934-G68<br />
              New York, NY 10004 USA
            </p>
          </div>

          {/* Card 2: Email Address */}
          <div className="bg-white rounded-2xl p-6 shadow-lg shadow-[#F2EFEE] border border-gray-100 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 rounded-full bg-[#F0EBFA] text-[#687FE5] flex items-center justify-center mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-[#2D2D2D] mb-2">Email Address</h4>
            <a
              href="mailto:info@healiumintelliscan.com"
              className="text-sm text-gray-600 hover:text-[#687FE5] underline underline-offset-4 transition-colors break-all"
            >
              info@healiumintelliscan.com
            </a>
          </div>

          {/* Card 3: Urgent Support Line */}
          <div className="bg-white rounded-2xl p-6 shadow-lg shadow-[#F2EFEE] border border-gray-100 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 rounded-full bg-[#F0EBFA] text-[#687FE5] flex items-center justify-center mb-4">
              <PhoneCall className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-[#2D2D2D] mb-2">Urgent Support Line</h4>
            <a
              href="tel:+13023104257"
              className="text-sm text-gray-600 hover:text-[#687FE5] transition-colors font-medium"
            >
              Call : +1 (302) 310-4257
            </a>
          </div>

          {/* Card 4: Support Hours */}
          <div className="bg-white rounded-2xl p-6 shadow-lg shadow-[#F2EFEE] border border-gray-100 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 rounded-full bg-[#F0EBFA] text-[#687FE5] flex items-center justify-center mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-[#2D2D2D] mb-2">Support hours</h4>
            <p className="text-sm text-gray-600 leading-relaxed mb-1">
              Monday–Friday: 9:00 AM–5:00 PM
            </p>
            <p className="text-xs text-gray-500">
              Response within <strong className="text-[#2D2D2D]">1 business day</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
