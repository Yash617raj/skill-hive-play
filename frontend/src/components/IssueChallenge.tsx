import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Trophy, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const IssueChallenge = () => {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Challenge Issued! 🎯",
      description: "Your challenge has been sent successfully. Good luck!",
    });
    
    setIsSubmitting(false);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="gradient" size="lg" className="shadow-glow">
          <Trophy className="mr-2 h-5 w-5" />
          Issue Challenge
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-primary" />
            Issue a New Challenge
          </DialogTitle>
          <DialogDescription>
            Challenge another developer to test their skills. Fill out the details below.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="opponent">Opponent Username</Label>
            <Input
              id="opponent"
              placeholder="Enter username..."
              className="transition-all duration-200 focus:shadow-elegant"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="difficulty">Difficulty Level</Label>
            <Select required>
              <SelectTrigger>
                <SelectValue placeholder="Select difficulty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="beginner">🟢 Beginner</SelectItem>
                <SelectItem value="intermediate">🟡 Intermediate</SelectItem>
                <SelectItem value="advanced">🔴 Advanced</SelectItem>
                <SelectItem value="expert">🔥 Expert</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="title">Challenge Title</Label>
            <Input
              id="title"
              placeholder="e.g., Binary Tree Traversal"
              className="transition-all duration-200 focus:shadow-elegant"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Challenge Description</Label>
            <Textarea
              id="description"
              placeholder="Describe the challenge, requirements, and expected outcome..."
              className="min-h-[100px] transition-all duration-200 focus:shadow-elegant"
              required
            />
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" variant="gradient" disabled={isSubmitting}>
              {isSubmitting ? (
                <>Sending...</>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Send Challenge
                </>
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default IssueChallenge;