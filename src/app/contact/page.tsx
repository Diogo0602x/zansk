"use client";

import { useState } from "react";
import { Box, Container, Stack, Typography, Button, Card, Image, Link, HeroSection, VisualAccent } from "@/components/ui";
import siteContent from "@/constants/siteContent";
import { FaUser, FaEnvelope, FaBuilding, FaComment, FaPaperPlane, FaLinkedinIn } from "react-icons/fa";
import { contactInfo } from "@/constants/contact";

const { pages } = siteContent;
const contactContent = pages.contact;

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    alert("Mensagem enviada! Entraremos em contato em breve.");
    setFormData({ name: "", email: "", company: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const ctas = Array.isArray(contactContent.content.cta)
    ? contactContent.content.cta
    : [contactContent.content.cta];

  return (
    <Box>
      {/* Hero centrado com contexto visual */}
      <HeroSection
        layout="centered"
        title={contactContent.content.headline}
        subtitle={contactContent.content.text}
        backgroundImage={contactContent.images.bgStripes}
      />

      {/* Contact Form com layout assimétrico */}
      <Box className="py-20 lg:py-32 relative">
        <VisualAccent position="top-right" variant="circle" />

        <Container size="md">
          <Box className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Form */}
            <Card variant="glass" padding="xl">
              <form onSubmit={handleSubmit}>
                <Stack spacing="lg">
                  <Typography variant="title" weight="bold" className="text-gray-900">
                    {ctas[0] || "Enviar briefing"}
                  </Typography>

                  <Box>
                    <Box className="flex items-center gap-2 mb-2">
                      <FaUser className="text-gray-600" />
                      <Typography variant="caption" weight="medium" className="text-gray-700">
                        Nome *
                      </Typography>
                    </Box>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all text-gray-900"
                    />
                  </Box>

                  <Box>
                    <Box className="flex items-center gap-2 mb-2">
                      <FaEnvelope className="text-gray-600" />
                      <Typography variant="caption" weight="medium" className="text-gray-700">
                        Email *
                      </Typography>
                    </Box>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all text-gray-900"
                    />
                  </Box>

                  <Box>
                    <Box className="flex items-center gap-2 mb-2">
                      <FaBuilding className="text-gray-600" />
                      <Typography variant="caption" weight="medium" className="text-gray-700">
                        Empresa
                      </Typography>
                    </Box>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all text-gray-900"
                    />
                  </Box>

                  <Box>
                    <Box className="flex items-center gap-2 mb-2">
                      <FaComment className="text-gray-600" />
                      <Typography variant="caption" weight="medium" className="text-gray-700">
                        Mensagem *
                      </Typography>
                    </Box>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all resize-none text-gray-900"
                    />
                  </Box>

                  <Button type="submit" variant="ghost" size="lg" fullWidth loading={isSubmitting}>
                    <Box className="flex items-center justify-center gap-2">
                      <FaPaperPlane className="text-sm" />
                      <Typography variant="body" weight="medium">
                        Enviar mensagem
                      </Typography>
                    </Box>
                  </Button>
                </Stack>
              </form>
            </Card>

            {/* Contact Info */}
            <Stack spacing="lg">
              <Card variant="glass" padding="lg">
                <Stack spacing="md">
                  <Box className="flex items-center gap-2">
                    <FaEnvelope className="text-accent-600 text-xl" />
                    <Typography variant="subtitle" weight="semibold" className="text-gray-900">
                      Email
                    </Typography>
                  </Box>
                  <Link
                    href={`mailto:${contactInfo.email}`}
                    variant="footer"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <Typography variant="body">
                      {contactInfo.email}
                    </Typography>
                  </Link>
                </Stack>
              </Card>

              <Card variant="glass" padding="lg">
                <Stack spacing="md">
                  <Box className="flex items-center gap-2">
                    <FaLinkedinIn className="text-accent-600 text-xl" />
                    <Typography variant="subtitle" weight="semibold" className="text-gray-900">
                      {ctas[1] || "Redes Sociais"}
                    </Typography>
                  </Box>
                  <Typography variant="body" className="text-gray-600">
                    Conecte-se conosco no LinkedIn
                  </Typography>
                  <Link
                    href={contactInfo.linkedin}
                    external
                  >
                    <Button
                      variant="ghost"
                      size="md"
                      className="group"
                    >
                      <Box className="flex items-center gap-2">
                        <Typography variant="body" weight="medium">
                          Visitar LinkedIn
                        </Typography>
                        <FaLinkedinIn className="group-hover:scale-110 transition-transform" />
                      </Box>
                    </Button>
                  </Link>
                </Stack>
              </Card>

              <Card
                variant="glass"
                padding="none"
                className="overflow-hidden aspect-square relative shadow-lg"
              >
                <Image
                  src={contactContent.images.humanMessage}
                  alt="Contact"
                  fill
                  className="object-cover"
                />
              </Card>
            </Stack>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
