import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Trophy, 
  Calendar, 
  Code2, 
  Send, 
  Inbox, 
  CheckCircle,
  XCircle,
  Star,
  Target,
  Award,
  TrendingUp,
  Edit
} from "lucide-react";

const Profile = () => {
  const [user] = useState({
    name: "Alex Developer",
    username: "alex_codes",
    email: "alex@skillhive.dev",
    joinDate: "March 2024",
    level: "Intermediate",
    rank: 1247,
    totalXP: 3450,
    nextLevelXP: 4000,
    streak: 7,
    totalChallenges: 45,
    challengesWon: 33,
    challengesSent: 28,
    challengesReceived: 17,
    favoriteLanguages: ["JavaScript", "Python", "TypeScript"],
    skills: [
      { name: "Algorithms", level: 75 },
      { name: "Data Structures", level: 85 },
      { name: "Problem Solving", level: 70 },
      { name: "Code Quality", level: 90 }
    ]
  });

  const sentChallenges = [
    {
      id: 1,
      title: "Binary Search Implementation",
      recipient: "sarah_codes",
      status: "pending",
      sentDate: "2 days ago",
      difficulty: "Intermediate"
    },
    {
      id: 2,
      title: "Linked List Reversal",
      recipient: "mike_dev",
      status: "accepted",
      sentDate: "1 week ago",
      difficulty: "Beginner"
    },
    {
      id: 3,
      title: "Merge Sort Algorithm",
      recipient: "emma_tech",
      status: "completed",
      sentDate: "2 weeks ago",
      difficulty: "Advanced"
    }
  ];

  const receivedChallenges = [
    {
      id: 4,
      title: "Two Pointer Technique",
      sender: "john_coder",
      status: "pending",
      receivedDate: "1 day ago",
      difficulty: "Intermediate"
    },
    {
      id: 5,
      title: "Stack Implementation",
      sender: "lisa_dev",
      status: "completed",
      receivedDate: "5 days ago",
      difficulty: "Beginner"
    }
  ];

  const achievements = [
    { icon: Trophy, title: "First Challenge", description: "Completed your first challenge", earned: true },
    { icon: Target, title: "Streak Master", description: "Maintain a 7-day streak", earned: true },
    { icon: Award, title: "Problem Solver", description: "Win 25 challenges", earned: true },
    { icon: Star, title: "Rising Star", description: "Reach top 1500 rank", earned: true },
    { icon: Code2, title: "Code Warrior", description: "Win 50 challenges", earned: false },
    { icon: TrendingUp, title: "Elite Coder", description: "Reach top 500 rank", earned: false }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-warning/10 text-warning border-warning/20";
      case "accepted":
        return "bg-primary/10 text-primary border-primary/20";
      case "completed":
        return "bg-success/10 text-success border-success/20";
      default:
        return "bg-muted";
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-success/10 text-success border-success/20";
      case "Intermediate":
        return "bg-warning/10 text-warning border-warning/20";
      case "Advanced":
        return "bg-destructive/10 text-destructive border-destructive/20";
      default:
        return "bg-muted";
    }
  };

  const winRate = Math.round((user.challengesWon / user.totalChallenges) * 100);
  const xpProgress = ((user.totalXP % 1000) / 1000) * 100;

  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Profile Header */}
      <Card className="shadow-card">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <Avatar className="h-24 w-24">
              <AvatarImage src="/placeholder-avatar.jpg" />
              <AvatarFallback className="text-2xl bg-gradient-primary text-white">
                {user.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-1 space-y-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-2xl font-bold">{user.name}</h1>
                  <Badge className={getDifficultyColor(user.level)} variant="outline">
                    {user.level}
                  </Badge>
                </div>
                <p className="text-muted-foreground">@{user.username}</p>
                <p className="text-sm text-muted-foreground">
                  Member since {user.joinDate} • Rank #{user.rank}
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{user.totalXP}</div>
                  <div className="text-sm text-muted-foreground">Total XP</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-success">{winRate}%</div>
                  <div className="text-sm text-muted-foreground">Win Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-warning">{user.streak}</div>
                  <div className="text-sm text-muted-foreground">Day Streak</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">{user.totalChallenges}</div>
                  <div className="text-sm text-muted-foreground">Challenges</div>
                </div>
              </div>
            </div>

            <Button variant="outline" className="self-start">
              <Edit className="mr-2 h-4 w-4" />
              Edit Profile
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Skills & Progress */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Skill Progress</CardTitle>
            <CardDescription>Your development across different areas</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {user.skills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Achievements</CardTitle>
            <CardDescription>Your coding milestones</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 p-3 rounded-lg border transition-all duration-200 ${
                    achievement.earned
                      ? "bg-success/5 border-success/20"
                      : "bg-muted/30 border-muted opacity-60"
                  }`}
                >
                  <achievement.icon 
                    className={`h-6 w-6 ${
                      achievement.earned ? "text-success" : "text-muted-foreground"
                    }`}
                  />
                  <div>
                    <div className="font-medium text-sm">{achievement.title}</div>
                    <div className="text-xs text-muted-foreground">{achievement.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Challenge History */}
      <Tabs defaultValue="sent" className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Challenge History</h2>
          <TabsList>
            <TabsTrigger value="sent" className="flex items-center gap-2">
              <Send className="h-4 w-4" />
              Sent ({user.challengesSent})
            </TabsTrigger>
            <TabsTrigger value="received" className="flex items-center gap-2">
              <Inbox className="h-4 w-4" />
              Received ({user.challengesReceived})
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="sent" className="space-y-4">
          {sentChallenges.map((challenge) => (
            <Card key={challenge.id} className="shadow-card">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h4 className="font-medium">{challenge.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      Sent to @{challenge.recipient} • {challenge.sentDate}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge className={getDifficultyColor(challenge.difficulty)} variant="outline">
                      {challenge.difficulty}
                    </Badge>
                    <Badge className={getStatusColor(challenge.status)} variant="outline">
                      {challenge.status === "completed" && <CheckCircle className="h-3 w-3 mr-1" />}
                      {challenge.status === "pending" && <Calendar className="h-3 w-3 mr-1" />}
                      {challenge.status === "accepted" && <Code2 className="h-3 w-3 mr-1" />}
                      {challenge.status}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="received" className="space-y-4">
          {receivedChallenges.map((challenge) => (
            <Card key={challenge.id} className="shadow-card">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h4 className="font-medium">{challenge.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      From @{challenge.sender} • {challenge.receivedDate}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge className={getDifficultyColor(challenge.difficulty)} variant="outline">
                      {challenge.difficulty}
                    </Badge>
                    <Badge className={getStatusColor(challenge.status)} variant="outline">
                      {challenge.status === "completed" && <CheckCircle className="h-3 w-3 mr-1" />}
                      {challenge.status === "pending" && <Calendar className="h-3 w-3 mr-1" />}
                      {challenge.status}
                    </Badge>
                    {challenge.status === "pending" && (
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <XCircle className="h-3 w-3 mr-1" />
                          Decline
                        </Button>
                        <Button variant="gradient" size="sm">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Accept
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Profile;