import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Trophy, Users, Zap, Target, Brain, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Landing = () => {
  const features = [
    {
      icon: Trophy,
      title: "Challenge System",
      description: "Issue and accept coding challenges from peers worldwide"
    },
    {
      icon: Brain,
      title: "AI Code Feedback",
      description: "Get instant, intelligent feedback on your code solutions"
    },
    {
      icon: Users,
      title: "Peer Learning",
      description: "Learn collaboratively with developers at your skill level"
    },
    {
      icon: Target,
      title: "Skill Tracking",
      description: "Track your progress and see your coding skills improve"
    }
  ];

  const stats = [
    { number: "10K+", label: "Active Developers" },
    { number: "50K+", label: "Challenges Completed" },
    { number: "95%", label: "Skill Improvement" },
    { number: "24/7", label: "AI Feedback" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 px-4">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto text-center text-white">
          <Badge variant="secondary" className="mb-6 animate-bounce-in">
            <Zap className="mr-1 h-3 w-3" />
            Join 10,000+ Developers
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Master Coding Through
            <span className="block text-accent"> Peer Challenges</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in">
            Challenge fellow developers, get AI-powered feedback, and accelerate your coding skills 
            in the most engaging way possible.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-right">
            <Link to="/dashboard">
              <Button variant="hero" size="lg" className="min-w-[200px]">
                <Code2 className="mr-2 h-5 w-5" />
                Start Coding
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
  
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose SkillHive?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Combine the power of peer learning with cutting-edge AI to become 
              the developer you've always wanted to be.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-gradient-card">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto bg-primary rounded-full p-3 w-fit mb-4">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Level Up Your Skills?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Join thousands of developers who are already mastering their craft through 
            peer challenges and AI feedback.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/dashboard">
              <Button variant="gradient" size="lg" className="min-w-[200px]">
                <Trophy className="mr-2 h-5 w-5" />
                Accept Your First Challenge
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="min-w-[200px]">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;