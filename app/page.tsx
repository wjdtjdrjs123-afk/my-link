import { dummyLinks } from "@/data/links";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function Page() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="w-full max-w-md space-y-8">
        
        <div className="text-center">
          <div className="mx-auto h-20 w-20 rounded-full bg-muted flex items-center justify-center mb-4 overflow-hidden border">
            {/* 프로필 이미지 플레이스홀더 */}
            <span className="text-2xl font-bold text-muted-foreground">ML</span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight">My Link</h1>
          <p className="text-muted-foreground mt-2 text-sm">
            내가 좋아하는 모든 링크를 한 곳에서 확인하세요.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {dummyLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a 
                key={link.id} 
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block outline-none"
              >
                <Card className="flex flex-row items-center py-4 px-6 hover:bg-muted/50 hover:border-primary/50 transition-all duration-200 cursor-pointer group active:scale-[0.98]">
                  {Icon && (
                    <div className="mr-4 text-muted-foreground group-hover:text-primary transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                  )}
                  <span className="flex-1 font-medium text-foreground group-hover:text-primary transition-colors">
                    {link.title}
                  </span>
                  <ExternalLink className="h-4 w-4 text-muted-foreground opacity-50 group-hover:opacity-100 group-hover:text-primary transition-all" />
                </Card>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
