"use client";
import { Button } from "../../components/ui/button";
import { useRouter } from "next/router";
import { TextGenerateEffect } from "../../components/ui/text-generate-effect";

const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows`;
const GeneratePage = () => {
  const router = useRouter();

  const handleButtonClick = (path: string) => {
    router.push(path);
  };

  return (
    <div>
      <div>
        <TextGenerateEffect words={words} />
      </div>
      <br />
      <div>
        <Button
          onClick={() => handleButtonClick("/")}
          className="mr-1 flex-shrink">
          Home Page
        </Button>
      </div>
    </div>
  );
};

export default GeneratePage;
