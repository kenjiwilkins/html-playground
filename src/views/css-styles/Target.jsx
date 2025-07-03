import { useMemo } from "react";
import { Container, Card } from "../../components";
import { fakerEN } from "@faker-js/faker";

function NavItem({ href, children }) {
  return (
    <a 
      href={href} 
      className="px-4 py-2 bg-blue-500 text-white font-bold visited:text-white rounded hover:bg-blue-600 transition-colors"
    >
      {children}
    </a>
  );
}

function TargetSection({ id, title, bgColor, borderColor, text }) {
  return (
    <div>
      <h1 
        id={id} 
        className={`text-3xl font-bold mb-4 p-4 rounded transition-colors target:${bgColor} target:border-l-4 target:${borderColor}`}
      >
        {title}
      </h1>
      <p className="text-gray-700 leading-relaxed">
        {text}
      </p>
    </div>
  );
}

function Target() {
  const section1Text = useMemo(() => fakerEN.lorem.paragraphs(3), []);
  const section2Text = useMemo(() => fakerEN.lorem.paragraphs(3), []);
  const section3Text = useMemo(() => fakerEN.lorem.paragraphs(3), []);

  return (
    <Container title=":target selector">
      <Card>
        <p className="flex flex-col gap-2">
          <span>
            {":target is a CSS pseudo-class that represents a unique element (the target element) with an id matching the URL's fragment."}
          </span>
          <span>
            {"It allows you to style elements when they are the target of a link, commonly used for highlighting sections when navigating with anchor links."}
          </span>
        </p>
      </Card>
      
      <Card>
        <h2>Navigation</h2>
        <div className="flex gap-4 mb-6">
          <NavItem href="#section1">Section 1</NavItem>
          <NavItem href="#section2">Section 2</NavItem>
          <NavItem href="#section3">Section 3</NavItem>
        </div>
        
        <div className="space-y-8">
          <TargetSection 
            id="section1" 
            title="Section 1" 
            bgColor="bg-yellow-200" 
            borderColor="border-yellow-500" 
            text={section1Text} 
          />
          <TargetSection 
            id="section2" 
            title="Section 2" 
            bgColor="bg-green-200" 
            borderColor="border-green-500" 
            text={section2Text} 
          />
          <TargetSection 
            id="section3" 
            title="Section 3" 
            bgColor="bg-purple-200" 
            borderColor="border-purple-500" 
            text={section3Text} 
          />
        </div>
      </Card>
    </Container>
  );
}

export default Target;