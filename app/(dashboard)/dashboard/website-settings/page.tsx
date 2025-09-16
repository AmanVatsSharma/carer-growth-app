"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Trash2, Save, Home, Settings, Globe } from "lucide-react";
import { toast } from "sonner";

interface MarqueeUniversity {
  src: string;
  alt: string;
  darkSrc: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface WebsiteSettings {
  id?: string;
  announcementTitle: string;
  announcementContent: string;
  announcementActive: boolean;
  marqueeUniversities: MarqueeUniversity[];
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  heroVideoUrl: string;
  heroVideoPoster: string;
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonText: string;
  valuePropTitle: string;
  valuePropDescription: string;
  sectionsGroupTitle: string;
  sectionsGroupDescription: string;
  faqTitle: string;
  faqDescription: string;
  faqItems: FAQItem[];
  siteTitle: string;
  siteDescription: string;
  contactEmail: string;
  contactPhone: string;
  facebookUrl: string;
  twitterUrl: string;
  instagramUrl: string;
  linkedinUrl: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
}

export default function WebsiteSettingsPage() {
  const [settings, setSettings] = useState<WebsiteSettings>({
    announcementTitle: "",
    announcementContent: "",
    announcementActive: false,
    marqueeUniversities: [],
    heroTitle: "",
    heroSubtitle: "",
    heroDescription: "",
    heroVideoUrl: "",
    heroVideoPoster: "",
    ctaTitle: "",
    ctaDescription: "",
    ctaButtonText: "",
    valuePropTitle: "",
    valuePropDescription: "",
    sectionsGroupTitle: "",
    sectionsGroupDescription: "",
    faqTitle: "",
    faqDescription: "",
    faqItems: [],
    siteTitle: "",
    siteDescription: "",
    contactEmail: "",
    contactPhone: "",
    facebookUrl: "",
    twitterUrl: "",
    instagramUrl: "",
    linkedinUrl: "",
    metaTitle: "",
    metaDescription: "",
    metaKeywords: "",
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const response = await fetch("/api/website-settings");
      if (response.ok) {
        const data = await response.json();
        setSettings({
          announcementTitle: data.announcementTitle || "",
          announcementContent: data.announcementContent || "",
          announcementActive: data.announcementActive || false,
          marqueeUniversities: data.marqueeUniversities || [],
          heroTitle: data.heroTitle || "",
          heroSubtitle: data.heroSubtitle || "",
          heroDescription: data.heroDescription || "",
          heroVideoUrl: data.heroVideoUrl || "",
          heroVideoPoster: data.heroVideoPoster || "",
          ctaTitle: data.ctaTitle || "",
          ctaDescription: data.ctaDescription || "",
          ctaButtonText: data.ctaButtonText || "",
          valuePropTitle: data.valuePropTitle || "",
          valuePropDescription: data.valuePropDescription || "",
          sectionsGroupTitle: data.sectionsGroupTitle || "",
          sectionsGroupDescription: data.sectionsGroupDescription || "",
          faqTitle: data.faqTitle || "",
          faqDescription: data.faqDescription || "",
          faqItems: data.faqItems || [],
          siteTitle: data.siteTitle || "",
          siteDescription: data.siteDescription || "",
          contactEmail: data.contactEmail || "",
          contactPhone: data.contactPhone || "",
          facebookUrl: data.facebookUrl || "",
          twitterUrl: data.twitterUrl || "",
          instagramUrl: data.instagramUrl || "",
          linkedinUrl: data.linkedinUrl || "",
          metaTitle: data.metaTitle || "",
          metaDescription: data.metaDescription || "",
          metaKeywords: data.metaKeywords || "",
        });
      }
    } catch (error) {
      console.error("Error fetching settings:", error);
      toast.error("Failed to load website settings");
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const response = await fetch("/api/website-settings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(settings),
      });

      if (response.ok) {
        toast.success("Website settings saved successfully!");
      } else {
        throw new Error("Failed to save settings");
      }
    } catch (error) {
      console.error("Error saving settings:", error);
      toast.error("Failed to save website settings");
    } finally {
      setSaving(false);
    }
  };

  const addMarqueeUniversity = () => {
    setSettings(prev => ({
      ...prev,
      marqueeUniversities: [
        ...prev.marqueeUniversities,
        { src: "", alt: "", darkSrc: "" }
      ]
    }));
  };

  const removeMarqueeUniversity = (index: number) => {
    setSettings(prev => ({
      ...prev,
      marqueeUniversities: prev.marqueeUniversities.filter((_, i) => i !== index)
    }));
  };

  const updateMarqueeUniversity = (index: number, field: keyof MarqueeUniversity, value: string) => {
    setSettings(prev => ({
      ...prev,
      marqueeUniversities: prev.marqueeUniversities.map((uni, i) =>
        i === index ? { ...uni, [field]: value } : uni
      )
    }));
  };

  const addFAQItem = () => {
    setSettings(prev => ({
      ...prev,
      faqItems: [
        ...prev.faqItems,
        { question: "", answer: "" }
      ]
    }));
  };

  const removeFAQItem = (index: number) => {
    setSettings(prev => ({
      ...prev,
      faqItems: prev.faqItems.filter((_, i) => i !== index)
    }));
  };

  const updateFAQItem = (index: number, field: keyof FAQItem, value: string) => {
    setSettings(prev => ({
      ...prev,
      faqItems: prev.faqItems.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      )
    }));
  };

  if (loading) {
    return (
      <div className="container mx-auto py-8 px-4">
        <div className="flex items-center justify-center h-64">
          <div className="text-lg">Loading website settings...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Website Settings</h1>
        <p className="text-muted-foreground mt-2">Manage your website content and configuration</p>
      </div>

      <Tabs defaultValue="homepage" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="homepage" className="flex items-center gap-2">
            <Home className="h-4 w-4" />
            Homepage Edit
          </TabsTrigger>
          <TabsTrigger value="content" className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            Content & Media
          </TabsTrigger>
          <TabsTrigger value="general" className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            General Settings
          </TabsTrigger>
        </TabsList>

        <TabsContent value="homepage" className="space-y-6">
          {/* Hero Section */}
          <Card>
            <CardHeader>
              <CardTitle>Hero Section</CardTitle>
              <CardDescription>Configure the main hero section of your homepage</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="hero-title">Hero Title</Label>
                <Input
                  id="hero-title"
                  value={settings.heroTitle}
                  onChange={(e) =>
                    setSettings(prev => ({ ...prev, heroTitle: e.target.value }))
                  }
                  placeholder="Your Future Awaits"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="hero-subtitle">Hero Subtitle</Label>
                <Input
                  id="hero-subtitle"
                  value={settings.heroSubtitle}
                  onChange={(e) =>
                    setSettings(prev => ({ ...prev, heroSubtitle: e.target.value }))
                  }
                  placeholder="Unlock Your Global Career & Study Dreams"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="hero-description">Hero Description</Label>
                <Textarea
                  id="hero-description"
                  value={settings.heroDescription}
                  onChange={(e) =>
                    setSettings(prev => ({ ...prev, heroDescription: e.target.value }))
                  }
                  placeholder="Step into a world of opportunity..."
                  rows={3}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="hero-video-url">Hero Video URL</Label>
                  <Input
                    id="hero-video-url"
                    value={settings.heroVideoUrl}
                    onChange={(e) =>
                      setSettings(prev => ({ ...prev, heroVideoUrl: e.target.value }))
                    }
                    placeholder="https://example.com/video.mp4"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hero-video-poster">Hero Video Poster</Label>
                  <Input
                    id="hero-video-poster"
                    value={settings.heroVideoPoster}
                    onChange={(e) =>
                      setSettings(prev => ({ ...prev, heroVideoPoster: e.target.value }))
                    }
                    placeholder="/images/poster.jpg"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <Card>
            <CardHeader>
              <CardTitle>Call-to-Action Section</CardTitle>
              <CardDescription>Configure the main CTA section</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="cta-title">CTA Title</Label>
                <Input
                  id="cta-title"
                  value={settings.ctaTitle}
                  onChange={(e) =>
                    setSettings(prev => ({ ...prev, ctaTitle: e.target.value }))
                  }
                  placeholder="Find Your Dream Career Abroad Today."
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cta-description">CTA Description</Label>
                <Textarea
                  id="cta-description"
                  value={settings.ctaDescription}
                  onChange={(e) =>
                    setSettings(prev => ({ ...prev, ctaDescription: e.target.value }))
                  }
                  placeholder="Empowering Students to achieve academic and career success."
                  rows={3}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cta-button-text">CTA Button Text</Label>
                <Input
                  id="cta-button-text"
                  value={settings.ctaButtonText}
                  onChange={(e) =>
                    setSettings(prev => ({ ...prev, ctaButtonText: e.target.value }))
                  }
                  placeholder="Book a call"
                />
              </div>
            </CardContent>
          </Card>

          {/* Value Proposition Section */}
          <Card>
            <CardHeader>
              <CardTitle>Value Proposition Section</CardTitle>
              <CardDescription>Configure the value proposition content</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="value-prop-title">Value Prop Title</Label>
                <Input
                  id="value-prop-title"
                  value={settings.valuePropTitle}
                  onChange={(e) =>
                    setSettings(prev => ({ ...prev, valuePropTitle: e.target.value }))
                  }
                  placeholder="Your Seamless Path to Studying Abroad."
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="value-prop-description">Value Prop Description</Label>
                <Textarea
                  id="value-prop-description"
                  value={settings.valuePropDescription}
                  onChange={(e) =>
                    setSettings(prev => ({ ...prev, valuePropDescription: e.target.value }))
                  }
                  placeholder="Applying to international institutions can be complex..."
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          {/* Sections Group */}
          <Card>
            <CardHeader>
              <CardTitle>Sections Group</CardTitle>
              <CardDescription>Configure the sections group content</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="sections-group-title">Sections Group Title</Label>
                <Input
                  id="sections-group-title"
                  value={settings.sectionsGroupTitle}
                  onChange={(e) =>
                    setSettings(prev => ({ ...prev, sectionsGroupTitle: e.target.value }))
                  }
                  placeholder="Discover Your Path to Global Success"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sections-group-description">Sections Group Description</Label>
                <Textarea
                  id="sections-group-description"
                  value={settings.sectionsGroupDescription}
                  onChange={(e) =>
                    setSettings(prev => ({ ...prev, sectionsGroupDescription: e.target.value }))
                  }
                  placeholder="Explore endless opportunities for international education..."
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          {/* FAQ Section */}
          <Card>
            <CardHeader>
              <CardTitle>FAQ Section</CardTitle>
              <CardDescription>Configure frequently asked questions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="faq-title">FAQ Title</Label>
                <Input
                  id="faq-title"
                  value={settings.faqTitle}
                  onChange={(e) =>
                    setSettings(prev => ({ ...prev, faqTitle: e.target.value }))
                  }
                  placeholder="Frequently Asked Questions"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="faq-description">FAQ Description</Label>
                <Textarea
                  id="faq-description"
                  value={settings.faqDescription}
                  onChange={(e) =>
                    setSettings(prev => ({ ...prev, faqDescription: e.target.value }))
                  }
                  placeholder="Get answers to common questions about studying abroad."
                  rows={3}
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label>FAQ Items</Label>
                  <Button onClick={addFAQItem} variant="outline" size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Add FAQ
                  </Button>
                </div>
                {settings.faqItems.map((item, index) => (
                  <div key={index} className="border rounded-lg p-4 space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">FAQ Item {index + 1}</h4>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => removeFAQItem(index)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`faq-question-${index}`}>Question</Label>
                      <Input
                        id={`faq-question-${index}`}
                        value={item.question}
                        onChange={(e) => updateFAQItem(index, "question", e.target.value)}
                        placeholder="Enter question"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`faq-answer-${index}`}>Answer</Label>
                      <Textarea
                        id={`faq-answer-${index}`}
                        value={item.answer}
                        onChange={(e) => updateFAQItem(index, "answer", e.target.value)}
                        placeholder="Enter answer"
                        rows={3}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="content" className="space-y-6">
          {/* Announcement Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Announcement Bar</CardTitle>
              <CardDescription>Configure the announcement banner displayed on your website</CardDescription>
            </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <Switch
                id="announcement-active"
                checked={settings.announcementActive}
                onCheckedChange={(checked) =>
                  setSettings(prev => ({ ...prev, announcementActive: checked }))
                }
              />
              <Label htmlFor="announcement-active">Show announcement bar</Label>
            </div>
            <div className="space-y-2">
              <Label htmlFor="announcement-title">Announcement Title</Label>
              <Input
                id="announcement-title"
                value={settings.announcementTitle}
                onChange={(e) =>
                  setSettings(prev => ({ ...prev, announcementTitle: e.target.value }))
                }
                placeholder="Enter announcement title"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="announcement-content">Announcement Content</Label>
              <Textarea
                id="announcement-content"
                value={settings.announcementContent}
                onChange={(e) =>
                  setSettings(prev => ({ ...prev, announcementContent: e.target.value }))
                }
                placeholder="Enter announcement content"
                rows={3}
              />
            </div>
          </CardContent>
        </Card>

        {/* Marquee Universities */}
        <Card>
          <CardHeader>
            <CardTitle>Marquee Universities</CardTitle>
            <CardDescription>Manage the universities displayed in the marquee section</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {settings.marqueeUniversities.map((uni, index) => (
              <div key={index} className="border rounded-lg p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">University {index + 1}</h4>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => removeMarqueeUniversity(index)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor={`uni-name-${index}`}>University Name</Label>
                    <Input
                      id={`uni-name-${index}`}
                      value={uni.alt}
                      onChange={(e) => updateMarqueeUniversity(index, "alt", e.target.value)}
                      placeholder="University name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`uni-light-${index}`}>Light Mode Logo URL</Label>
                    <Input
                      id={`uni-light-${index}`}
                      value={uni.src}
                      onChange={(e) => updateMarqueeUniversity(index, "src", e.target.value)}
                      placeholder="/logo-01.webp"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`uni-dark-${index}`}>Dark Mode Logo URL</Label>
                    <Input
                      id={`uni-dark-${index}`}
                      value={uni.darkSrc}
                      onChange={(e) => updateMarqueeUniversity(index, "darkSrc", e.target.value)}
                      placeholder="/logo-01_dark.webp"
                    />
                  </div>
                </div>
              </div>
            ))}
            <Button onClick={addMarqueeUniversity} variant="outline">
              <Plus className="h-4 w-4 mr-2" />
              Add University
            </Button>
          </CardContent>
        </Card>

        {/* General Settings */}
        <Card>
          <CardHeader>
            <CardTitle>General Website Settings</CardTitle>
            <CardDescription>Basic website information and contact details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="site-title">Site Title</Label>
                <Input
                  id="site-title"
                  value={settings.siteTitle}
                  onChange={(e) =>
                    setSettings(prev => ({ ...prev, siteTitle: e.target.value }))
                  }
                  placeholder="IPD Education"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-email">Contact Email</Label>
                <Input
                  id="contact-email"
                  type="email"
                  value={settings.contactEmail}
                  onChange={(e) =>
                    setSettings(prev => ({ ...prev, contactEmail: e.target.value }))
                  }
                  placeholder="info@ipdeducation.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="site-description">Site Description</Label>
              <Textarea
                id="site-description"
                value={settings.siteDescription}
                onChange={(e) =>
                  setSettings(prev => ({ ...prev, siteDescription: e.target.value }))
                }
                placeholder="Your gateway to international education and career opportunities"
                rows={3}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact-phone">Contact Phone</Label>
              <Input
                id="contact-phone"
                value={settings.contactPhone}
                onChange={(e) =>
                  setSettings(prev => ({ ...prev, contactPhone: e.target.value }))
                }
                placeholder="+1-555-0123"
              />
            </div>
          </CardContent>
        </Card>

        {/* Social Media Links */}
        <Card>
          <CardHeader>
            <CardTitle>Social Media Links</CardTitle>
            <CardDescription>Add your social media profiles</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="facebook-url">Facebook URL</Label>
                <Input
                  id="facebook-url"
                  value={settings.facebookUrl}
                  onChange={(e) =>
                    setSettings(prev => ({ ...prev, facebookUrl: e.target.value }))
                  }
                  placeholder="https://facebook.com/yourpage"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="twitter-url">Twitter URL</Label>
                <Input
                  id="twitter-url"
                  value={settings.twitterUrl}
                  onChange={(e) =>
                    setSettings(prev => ({ ...prev, twitterUrl: e.target.value }))
                  }
                  placeholder="https://twitter.com/yourhandle"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="instagram-url">Instagram URL</Label>
                <Input
                  id="instagram-url"
                  value={settings.instagramUrl}
                  onChange={(e) =>
                    setSettings(prev => ({ ...prev, instagramUrl: e.target.value }))
                  }
                  placeholder="https://instagram.com/yourhandle"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="linkedin-url">LinkedIn URL</Label>
                <Input
                  id="linkedin-url"
                  value={settings.linkedinUrl}
                  onChange={(e) =>
                    setSettings(prev => ({ ...prev, linkedinUrl: e.target.value }))
                  }
                  placeholder="https://linkedin.com/company/yourcompany"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* SEO Settings */}
        <Card>
          <CardHeader>
            <CardTitle>SEO Settings</CardTitle>
            <CardDescription>Configure meta tags for better search engine optimization</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="meta-title">Meta Title</Label>
              <Input
                id="meta-title"
                value={settings.metaTitle}
                onChange={(e) =>
                  setSettings(prev => ({ ...prev, metaTitle: e.target.value }))
                }
                placeholder="IPD Education - Study Abroad Opportunities"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="meta-description">Meta Description</Label>
              <Textarea
                id="meta-description"
                value={settings.metaDescription}
                onChange={(e) =>
                  setSettings(prev => ({ ...prev, metaDescription: e.target.value }))
                }
                placeholder="Discover international education opportunities with IPD Education..."
                rows={3}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="meta-keywords">Meta Keywords</Label>
              <Input
                id="meta-keywords"
                value={settings.metaKeywords}
                onChange={(e) =>
                  setSettings(prev => ({ ...prev, metaKeywords: e.target.value }))
                }
                placeholder="study abroad, international education, university, career guidance"
              />
            </div>
          </CardContent>
        </Card>

        </TabsContent>

        <TabsContent value="general" className="space-y-6">
          {/* General Settings */}
          <Card>
            <CardHeader>
              <CardTitle>General Website Settings</CardTitle>
              <CardDescription>Basic website information and contact details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="site-title">Site Title</Label>
                  <Input
                    id="site-title"
                    value={settings.siteTitle}
                    onChange={(e) =>
                      setSettings(prev => ({ ...prev, siteTitle: e.target.value }))
                    }
                    placeholder="IPD Education"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-email">Contact Email</Label>
                  <Input
                    id="contact-email"
                    type="email"
                    value={settings.contactEmail}
                    onChange={(e) =>
                      setSettings(prev => ({ ...prev, contactEmail: e.target.value }))
                    }
                    placeholder="info@ipdeducation.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="site-description">Site Description</Label>
                <Textarea
                  id="site-description"
                  value={settings.siteDescription}
                  onChange={(e) =>
                    setSettings(prev => ({ ...prev, siteDescription: e.target.value }))
                  }
                  placeholder="Your gateway to international education and career opportunities"
                  rows={3}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-phone">Contact Phone</Label>
                <Input
                  id="contact-phone"
                  value={settings.contactPhone}
                  onChange={(e) =>
                    setSettings(prev => ({ ...prev, contactPhone: e.target.value }))
                  }
                  placeholder="+1-555-0123"
                />
              </div>
            </CardContent>
          </Card>

          {/* Social Media Links */}
          <Card>
            <CardHeader>
              <CardTitle>Social Media Links</CardTitle>
              <CardDescription>Add your social media profiles</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="facebook-url">Facebook URL</Label>
                  <Input
                    id="facebook-url"
                    value={settings.facebookUrl}
                    onChange={(e) =>
                      setSettings(prev => ({ ...prev, facebookUrl: e.target.value }))
                    }
                    placeholder="https://facebook.com/yourpage"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="twitter-url">Twitter URL</Label>
                  <Input
                    id="twitter-url"
                    value={settings.twitterUrl}
                    onChange={(e) =>
                      setSettings(prev => ({ ...prev, twitterUrl: e.target.value }))
                    }
                    placeholder="https://twitter.com/yourhandle"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="instagram-url">Instagram URL</Label>
                  <Input
                    id="instagram-url"
                    value={settings.instagramUrl}
                    onChange={(e) =>
                      setSettings(prev => ({ ...prev, instagramUrl: e.target.value }))
                    }
                    placeholder="https://instagram.com/yourhandle"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="linkedin-url">LinkedIn URL</Label>
                  <Input
                    id="linkedin-url"
                    value={settings.linkedinUrl}
                    onChange={(e) =>
                      setSettings(prev => ({ ...prev, linkedinUrl: e.target.value }))
                    }
                    placeholder="https://linkedin.com/company/yourcompany"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* SEO Settings */}
          <Card>
            <CardHeader>
              <CardTitle>SEO Settings</CardTitle>
              <CardDescription>Configure meta tags for better search engine optimization</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="meta-title">Meta Title</Label>
                <Input
                  id="meta-title"
                  value={settings.metaTitle}
                  onChange={(e) =>
                    setSettings(prev => ({ ...prev, metaTitle: e.target.value }))
                  }
                  placeholder="IPD Education - Study Abroad Opportunities"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="meta-description">Meta Description</Label>
                <Textarea
                  id="meta-description"
                  value={settings.metaDescription}
                  onChange={(e) =>
                    setSettings(prev => ({ ...prev, metaDescription: e.target.value }))
                  }
                  placeholder="Discover international education opportunities with IPD Education..."
                  rows={3}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="meta-keywords">Meta Keywords</Label>
                <Input
                  id="meta-keywords"
                  value={settings.metaKeywords}
                  onChange={(e) =>
                    setSettings(prev => ({ ...prev, metaKeywords: e.target.value }))
                  }
                  placeholder="study abroad, international education, university, career guidance"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Save Button */}
        <div className="flex justify-end">
          <Button onClick={handleSave} disabled={saving} size="lg">
            <Save className="h-4 w-4 mr-2" />
            {saving ? "Saving..." : "Save Settings"}
          </Button>
        </div>
      </Tabs>
    </div>
  );
}