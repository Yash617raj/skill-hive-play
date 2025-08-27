import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Code2, 
  Send, 
  Brain, 
  Clock, 
  Trophy, 
  Users,
  Lightbulb,
  CheckCircle2,
  Star
} from "lucide-react";
import IssueChallenge from "@/components/IssueChallenge";
import { useToast } from "@/hooks/use-toast";

const Challenges = () => {
  const [code, setCode] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const { toast } = useToast();

  const availableChallenges = [
    {
      id: 1,
      title: "Two Sum Array Challenge",
      description: "Find two numbers in an array that add up to a target sum",
      difficulty: "Beginner",
      timeEstimate: "15-30 min",
      participants: 234,
      xp: 100,
      tags: ["Arrays", "Hash Tables"]
    },
    {
      id: 2,
      title: "Binary Tree Traversal",
      description: "Implement inorder, preorder, and postorder traversal methods",
      difficulty: "Intermediate",
      timeEstimate: "45-60 min",
      participants: 156,
      xp: 200,
      tags: ["Trees", "Recursion"]
    },
    {
      id: 3,
      title: "Dynamic Programming - Coin Change",
      description: "Find minimum coins needed to make a given amount",
      difficulty: "Advanced",
      timeEstimate: "60-90 min",
      participants: 89,
      xp: 300,
      tags: ["Dynamic Programming", "Optimization"]
    },
    {
      id: 4,
      title: "Graph BFS Implementation",
      description: "Implement breadth-first search algorithm for graphs",
      difficulty: "Intermediate",
      timeEstimate: "30-45 min",
      participants: 127,
      xp: 180,
      tags: ["Graphs", "BFS", "Queues"]
    }
  ];

  const handleGetFeedback = async () => {
    if (!code.trim()) {
      toast({
        title: "No code detected",
        description: "Please paste your code before requesting feedback.",
        variant: "destructive"
      });
      return;
    }

    setIsAnalyzing(true);
    
    // Mock AI feedback
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const mockFeedback = `
## Code Analysis Results 🎯

**Overall Assessment**: Your solution demonstrates solid understanding of the problem!

### ✅ Strengths:
- Clean and readable code structure
- Proper variable naming conventions
- Good use of comments for clarity

### 🔧 Areas for Improvement:
- Consider edge cases (empty arrays, null values)
- Time complexity could be optimized from O(n²) to O(n)
- Add input validation for robustness

### 💡 Optimization Suggestion:
Instead of nested loops, try using a hash map to store previously seen values. This reduces time complexity significantly.

### 📚 Learning Resources:
- [Hash Tables in JavaScript](https://example.com)
- [Time Complexity Analysis](https://example.com)

**Score: 7.5/10** - Great foundation with room for optimization!
    `;
    
    setFeedback(mockFeedback);
    setIsAnalyzing(false);
    
    toast({
      title: "Analysis Complete! 🧠",
      description: "AI feedback has been generated for your code.",
    });
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
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Coding Challenges</h1>
          <p className="text-muted-foreground">Browse challenges or create your own</p>
        </div>
        <IssueChallenge />
      </div>

      <Tabs defaultValue="browse" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 lg:w-[400px]">
          <TabsTrigger value="browse">Browse Challenges</TabsTrigger>
          <TabsTrigger value="code">AI Code Feedback</TabsTrigger>
        </TabsList>

        <TabsContent value="browse" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Available Challenges</h2>
            <Badge variant="outline">{availableChallenges.length} challenges</Badge>
          </div>

          <div className="grid gap-6">
            {availableChallenges.map((challenge) => (
              <Card key={challenge.id} className="shadow-card hover:shadow-elegant transition-all duration-200">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-3">
                        <CardTitle className="text-lg">{challenge.title}</CardTitle>
                        <Badge className={getDifficultyColor(challenge.difficulty)} variant="outline">
                          {challenge.difficulty}
                        </Badge>
                      </div>
                      <CardDescription className="text-base">
                        {challenge.description}
                      </CardDescription>
                      <div className="flex flex-wrap gap-2">
                        {challenge.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {challenge.timeEstimate}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {challenge.participants} participants
                      </span>
                      <span className="flex items-center gap-1">
                        <Star className="h-4 w-4" />
                        {challenge.xp} XP
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Preview
                      </Button>
                      <Button variant="gradient" size="sm">
                        <Trophy className="mr-1 h-4 w-4" />
                        Start Challenge
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="code" className="space-y-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-primary" />
                AI Code Feedback
              </CardTitle>
              <CardDescription>
                Paste your code below and get instant AI-powered feedback on your solution
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="code" className="text-sm font-medium">
                  Your Code
                </label>
                <Textarea
                  id="code"
                  placeholder="// Paste your code here...
function twoSum(nums, target) {
  // Your implementation here
  return [];
}"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="min-h-[200px] font-mono text-sm"
                />
              </div>
              
              <Button 
                onClick={handleGetFeedback}
                disabled={isAnalyzing}
                variant="gradient"
                className="w-full"
              >
                {isAnalyzing ? (
                  <>
                    <Code2 className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing Code...
                  </>
                ) : (
                  <>
                    <Brain className="mr-2 h-4 w-4" />
                    Get AI Feedback
                  </>
                )}
              </Button>

              {feedback && (
                <Alert className="mt-6 border-success/20 bg-success/5">
                  <Lightbulb className="h-4 w-4 text-success" />
                  <AlertDescription className="whitespace-pre-line text-sm leading-relaxed">
                    {feedback}
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>

          {/* Tips Card */}
          <Card className="shadow-card bg-gradient-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                Pro Tips for Better Feedback
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Include comments explaining your thought process</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Paste complete, runnable code snippets</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Mention the problem you're trying to solve</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Ask specific questions about optimization or edge cases</span>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Challenges;