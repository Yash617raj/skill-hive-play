import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Trophy, 
  Code2, 
  Clock, 
  CheckCircle, 
  XCircle, 
  Star,
  TrendingUp,
  Target,
  Calendar
} from "lucide-react";
import IssueChallenge from "@/components/IssueChallenge";

const Dashboard = () => {
  const [user] = useState({
    name: "Alex Developer",
    level: "Intermediate",
    rank: 1247,
    streak: 7,
    completedChallenges: 23,
    totalXP: 3450
  });

  const activeChallenges = [
    {
      id: 1,
      title: "Binary Tree Inorder Traversal",
      opponent: "sarah_codes",
      difficulty: "Intermediate",
      status: "pending",
      timeLeft: "2 days",
      xp: 150
    },
    {
      id: 2,
      title: "Two Sum Problem",
      opponent: "mike_dev",
      difficulty: "Beginner",
      status: "in-progress",
      timeLeft: "5 hours",
      xp: 100
    },
    {
      id: 3,
      title: "Merge Sort Implementation",
      opponent: "emma_tech",
      difficulty: "Advanced",
      status: "completed",
      timeLeft: "Completed",
      xp: 250
    }
  ];

  const recentChallenges = [
    {
      id: 4,
      title: "Palindrome Checker",
      opponent: "john_coder",
      result: "won",
      xp: 120,
      date: "2 days ago"
    },
    {
      id: 5,
      title: "Fibonacci Sequence",
      opponent: "lisa_dev",
      result: "lost",
      xp: 0,
      date: "4 days ago"
    },
    {
      id: 6,
      title: "Array Rotation",
      opponent: "david_tech",
      result: "won",
      xp: 180,
      date: "1 week ago"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending":
        return <Clock className="h-4 w-4 text-warning" />;
      case "in-progress":
        return <Code2 className="h-4 w-4 text-primary" />;
      case "completed":
        return <CheckCircle className="h-4 w-4 text-success" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-warning/10 text-warning border-warning/20";
      case "in-progress":
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

  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Welcome back, {user.name}! 👋</h1>
          <p className="text-muted-foreground">Ready to tackle some challenges today?</p>
        </div>
        <IssueChallenge />
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Rank</CardTitle>
            <Trophy className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">#{user.rank}</div>
            <p className="text-xs text-muted-foreground">
              <TrendingUp className="inline h-3 w-3 mr-1" />
              +12 this week
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Daily Streak</CardTitle>
            <Target className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{user.streak} days</div>
            <p className="text-xs text-muted-foreground">Keep it up! 🔥</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total XP</CardTitle>
            <Star className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{user.totalXP.toLocaleString()}</div>
            <Progress value={75} className="mt-2" />
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Challenges Won</CardTitle>
            <CheckCircle className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{user.completedChallenges}</div>
            <p className="text-xs text-muted-foreground">73% win rate</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="active" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 lg:w-[400px]">
          <TabsTrigger value="active">Active Challenges</TabsTrigger>
          <TabsTrigger value="history">Challenge History</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Your Active Challenges</h3>
            <Badge variant="outline">{activeChallenges.length} active</Badge>
          </div>
          
          <div className="grid gap-4">
            {activeChallenges.map((challenge) => (
              <Card key={challenge.id} className="shadow-card hover:shadow-elegant transition-all duration-200">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <CardTitle className="text-lg">{challenge.title}</CardTitle>
                      <CardDescription>
                        Challenge from <span className="font-medium">@{challenge.opponent}</span>
                      </CardDescription>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge className={getStatusColor(challenge.status)} variant="outline">
                        {getStatusIcon(challenge.status)}
                        <span className="ml-1 capitalize">{challenge.status}</span>
                      </Badge>
                      <Badge className={getDifficultyColor(challenge.difficulty)} variant="outline">
                        {challenge.difficulty}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {challenge.timeLeft}
                      </span>
                      <span className="flex items-center gap-1">
                        <Star className="h-3 w-3" />
                        {challenge.xp} XP
                      </span>
                    </div>
                    <Button 
                      variant={challenge.status === "pending" ? "gradient" : "outline"}
                      size="sm"
                    >
                      {challenge.status === "pending" ? "Accept" : 
                       challenge.status === "in-progress" ? "Continue" : "Review"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Recent Challenge History</h3>
            <Badge variant="outline">{recentChallenges.length} completed</Badge>
          </div>
          
          <div className="grid gap-4">
            {recentChallenges.map((challenge) => (
              <Card key={challenge.id} className="shadow-card">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h4 className="font-medium">{challenge.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        vs @{challenge.opponent} • {challenge.date}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant={challenge.result === "won" ? "default" : "outline"}>
                        {challenge.result === "won" ? (
                          <CheckCircle className="h-3 w-3 mr-1" />
                        ) : (
                          <XCircle className="h-3 w-3 mr-1" />
                        )}
                        {challenge.result === "won" ? "Won" : "Lost"}
                      </Badge>
                      {challenge.xp > 0 && (
                        <span className="text-sm font-medium text-warning">
                          +{challenge.xp} XP
                        </span>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;