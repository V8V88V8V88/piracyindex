"use client"

import React from 'react';
import { Search } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { useState } from 'react';

export default function LegalPage() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/70 z-10" />
        <Input
          placeholder="Search legal information..."
          className="pl-9 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-primary mb-3">Legal Information</h1>
        <p className="text-muted-foreground">
          Important legal information regarding this website and its content.
        </p>
      </div>

      <div className="space-y-6">
        <div className="rounded-lg border border-border p-6 bg-background/80 backdrop-blur">
          <h2 className="text-xl font-semibold mb-4 text-primary">Disclaimer of Liability</h2>
          
          <div className="space-y-4 mb-6">
            <p>Piracy Index is a search engine and indexing service that organizes and categorizes links to external websites. We do not host, distribute, or store any copyrighted content on our servers. All resources listed are publicly available information linked from third-party websites.</p>
            
            <p>The Piracy Index operates solely as an informational directory and search tool. We do not promote, encourage, or endorse copyright infringement or any illegal activities. The inclusion of any website in our index does not imply our endorsement of the content found therein.</p>
            
            <p>We are not affiliated with, associated with, or sponsored by any of the websites, services, or entities listed in our directory. The Piracy Index has no control over and assumes no responsibility for the content, privacy policies, or practices of any third-party websites.</p>
          </div>
          
          <h3 className="text-lg font-medium mb-2">DMCA Compliance</h3>
          <p className="mb-4">If you believe that your copyrighted work has been improperly listed on our index, please contact the owner or operator of the specific third-party website where the content is hosted. If you wish to have a link removed from our index, please contact us with the appropriate information, and we will promptly review your request.</p>
          
          <h3 className="text-lg font-medium mb-2">Legal Alternatives</h3>
          <p className="mb-2">We encourage users to support content creators through legal means:</p>
          <ul className="space-y-2 list-disc pl-5 mb-4">
            <li>Subscribe to legitimate streaming services</li>
            <li>Purchase content from authorized retailers</li>
            <li>Use public domain resources for older works</li>
            <li>Utilize your local library&apos;s digital borrowing options</li>
            <li>Access officially free content supported by advertisements</li>
          </ul>
          
          <h3 className="text-lg font-medium mb-2">User Responsibility</h3>
          <p className="mb-2">Users are solely responsible for:</p>
          <ul className="space-y-2 list-disc pl-5">
            <li>Complying with all applicable laws in their jurisdiction</li>
            <li>Determining the legality of accessing any linked content</li>
            <li>Any consequences that may arise from their use of information found via our index</li>
          </ul>
          
          <div className="mt-6 p-4 bg-secondary/50 rounded-md">
            <p className="text-sm italic">This disclaimer may be updated periodically without notice. By using the Piracy Index, you acknowledge that you have read and understood this disclaimer and agree to be bound by its terms.</p>
          </div>
        </div>
      </div>
    </div>
  );
} 