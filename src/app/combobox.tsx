"use client";

import { Check, ChevronsUpDown } from "lucide-react";
import * as React from "react";
import { useInView } from "react-intersection-observer";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
  { value: "vue.js", label: "Vue.js" },
  { value: "react", label: "React" },
  { value: "angular", label: "Angular" },
  { value: "ember.js", label: "Ember.js" },
  { value: "backbone.js", label: "Backbone.js" },
  { value: "express", label: "Express" },
  { value: "flask", label: "Flask" },
  { value: "django", label: "Django" },
  { value: "rubyonrails", label: "Ruby on Rails" },
  { value: "laravel", label: "Laravel" },
  { value: "spring", label: "Spring" },
  { value: "asp.net", label: "ASP.NET" },
  { value: "gatsby", label: "Gatsby" },
  { value: "gridsome", label: "Gridsome" },
  { value: "jekyll", label: "Jekyll" },
  { value: "hugo", label: "Hugo" },
  { value: "eleventy", label: "Eleventy" },
  { value: "meteor", label: "Meteor" },
  { value: "sapper", label: "Sapper" },
  { value: "blitz.js", label: "Blitz.js" },
  { value: "redwoodjs", label: "RedwoodJS" },
  { value: "helmet", label: "Helmet" },
  { value: "strapi", label: "Strapi" },
  { value: "keystone", label: "Keystone" },
  { value: "nextui", label: "NextUI" },
  { value: "nativescript", label: "NativeScript" },
  { value: "ionic", label: "Ionic" },
  { value: "flutter", label: "Flutter" },
  { value: "reactnative", label: "React Native" },
  { value: "xamarin", label: "Xamarin" },
  { value: "cordova", label: "Cordova" },
  { value: "electron", label: "Electron" },
  { value: "nw.js", label: "NW.js" },
  { value: "quasar", label: "Quasar" },
  { value: "vuetify", label: "Vuetify" },
  { value: "bootstrap", label: "Bootstrap" },
  { value: "foundation", label: "Foundation" },
  { value: "bulma", label: "Bulma" },
  { value: "tailwindcss", label: "Tailwind CSS" },
  { value: "materialize", label: "Materialize" },
  { value: "uikit", label: "UIkit" },
  { value: "semanticui", label: "Semantic UI" },
  { value: "antdesign", label: "Ant Design" },
  { value: "primefaces", label: "PrimeFaces" },
  { value: "materialui", label: "Material-UI" },
  { value: "svelte", label: "Svelte" },
  { value: "mithril.js", label: "Mithril.js" },
  { value: "purescript", label: "PureScript" },
  { value: "elm", label: "Elm" },
  { value: "clojurescript", label: "ClojureScript" },
  { value: "reason", label: "Reason" },
  { value: "solidjs", label: "SolidJS" },
  { value: "alpine.js", label: "Alpine.js" },
  { value: "stimulus", label: "Stimulus" },
];

export function ComboboxDemo() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [last, setlast] = React.useState(10);
  // useInView hook options and callback
  const { ref: inViewRef, inView } = useInView({
    threshold: 0,
  });

  // Effect to load more items when the sentinel is in view
  React.useEffect(() => {
    if (inView) {
      setlast((prevLast) => prevLast + 5);
    }
  }, [inView]); // Only re-run the effect if inView changes

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Select framework..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px]  overflow-hidden p-0">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            <ScrollArea className={"w-full max-h-[300px] h-[300px]"}>
              {frameworks.slice(0, last).map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    // setOpen(false);
                  }}
                  className="flex items-center gap-4"
                >
                  {/* <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  /> */}
                  <Checkbox />
                  {framework.label}
                </CommandItem>
              ))}
              <CommandItem>
                <div ref={inViewRef} style={{ height: 20 }}></div>
              </CommandItem>
            </ScrollArea>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
