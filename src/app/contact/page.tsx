"use client";

import { useState } from "react";
import { Box, Container, Stack, Typography, Button, Card, Image, Link } from "@/components/ui";
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
      {/* Hero with Background */}
      <Box className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <Box className="absolute inset-0 z-0">
          <Image
            src={contactContent.images.bgStripes}
            alt="Contact Background"
            fill
            className="object-cover"
          />
          <Box className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/70 to-dark" />
        </Box>

        <Container className="relative z-10">
          <Stack align="center" spacing="lg" className="text-center max-w-3xl mx-auto">
            <Typography variant="display" weight="bold">
              {contactContent.content.headline}
            </Typography>
            <Typography variant="subtitle" className="text-secondary-300">
              {contactContent.content.text}
            </Typography>
          </Stack>
        </Container>
      </Box>

      {/* Contact Form */}
      <Box className="py-16 lg:py-24">
        <Container size="md">
          <Box className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <Card variant="glass" padding="xl">
              <form onSubmit={handleSubmit}>
                <Stack spacing="lg">
                  <Typography variant="title" weight="bold">
                    {ctas[0] || "Enviar briefing"}
                  </Typography>

                  <Box>
                    <Box className="flex items-center gap-2 mb-2">
                      <FaUser className="text-primary" />
                      <Typography variant="caption" weight="medium">
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
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    />
                  </Box>

                  <Box>
                    <Box className="flex items-center gap-2 mb-2">
                      <FaEnvelope className="text-primary" />
                      <Typography variant="caption" weight="medium">
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
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    />
                  </Box>

                  <Box>
                    <Box className="flex items-center gap-2 mb-2">
                      <FaBuilding className="text-primary" />
                      <Typography variant="caption" weight="medium">
                        Empresa
                      </Typography>
                    </Box>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    />
                  </Box>

                  <Box>
                    <Box className="flex items-center gap-2 mb-2">
                      <FaComment className="text-primary" />
                      <Typography variant="caption" weight="medium">
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
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                    />
                  </Box>

                  <Button type="submit" variant="solid" size="lg" fullWidth loading={isSubmitting}>
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
                    <FaEnvelope className="text-primary text-xl" />
                    <Typography variant="subtitle" weight="semibold">
                      Email
                    </Typography>
                  </Box>
                  <Link
                    href={`mailto:${contactInfo.email}`}
                    variant="footer"
                    className="text-secondary-300 hover:text-primary transition-colors"
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
                    <FaLinkedinIn className="text-primary text-xl" />
                    <Typography variant="subtitle" weight="semibold">
                      {ctas[1] || "Redes Sociais"}
                    </Typography>
                  </Box>
                  <Typography variant="body" className="text-secondary-300">
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
                className="overflow-hidden aspect-square relative"
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
