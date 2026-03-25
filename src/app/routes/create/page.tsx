"use client";

import { useState } from "react";
import { motion, AnimatePresence, Reorder } from "framer-motion";
import {
  MapPin,
  GripVertical,
  X,
  Plus,
  Clock,
  Route,
  Search,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

interface Stop {
  id: string;
  name: string;
  address: string;
}

const initialStops: Stop[] = [
  { id: "1", name: "Sip & Stroll Coffee", address: "101 Main St" },
  { id: "2", name: "Roast & Co.", address: "115 Main St" },
  { id: "3", name: "The Pour House", address: "203 Elm Ave" },
];

const themes = [
  { value: "food", label: "Food & Drink" },
  { value: "art", label: "Art & Culture" },
  { value: "history", label: "History" },
  { value: "nightlife", label: "Nightlife" },
  { value: "shopping", label: "Shopping" },
  { value: "custom", label: "Custom" },
];

export default function CreateRoutePage() {
  const [stops, setStops] = useState<Stop[]>(initialStops);
  const [routeName, setRouteName] = useState("");
  const [description, setDescription] = useState("");
  const [isPublic, setIsPublic] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const addStop = () => {
    const newId = String(Date.now());
    setStops([
      ...stops,
      {
        id: newId,
        name: `New Stop ${stops.length + 1}`,
        address: "123 Example St",
      },
    ]);
  };

  const removeStop = (id: string) => {
    setStops(stops.filter((s) => s.id !== id));
  };

  const estimatedDuration = stops.length * 10;
  const estimatedDistance = (stops.length * 0.3).toFixed(1);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mb-8"
        >
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-2">
            Create a Walking Route
          </h1>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.35 }}
          className="space-y-6 mb-10"
        >
          {/* Route name */}
          <div className="space-y-2">
            <Label htmlFor="route-name">Route Name</Label>
            <Input
              id="route-name"
              placeholder="e.g. Saturday Morning Coffee Crawl"
              value={routeName}
              onChange={(e) => setRouteName(e.target.value)}
              className="rounded-full h-10"
            />
          </div>

          {/* Theme select */}
          <div className="space-y-2">
            <Label>Theme</Label>
            <Select defaultValue="food">
              <SelectTrigger className="rounded-full h-10 w-full">
                <SelectValue placeholder="Select a theme" />
              </SelectTrigger>
              <SelectContent>
                {themes.map((theme) => (
                  <SelectItem key={theme.value} value={theme.value}>
                    {theme.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <textarea
              id="description"
              placeholder="Describe what makes this route special..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              className="flex w-full rounded-2xl border border-input bg-transparent px-3 py-2 text-sm transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 resize-none"
            />
          </div>

          {/* Public/Private toggle */}
          <div className="flex items-center justify-between">
            <div>
              <Label>Visibility</Label>
              <p className="text-sm text-muted-foreground mt-0.5">
                {isPublic
                  ? "Anyone can discover this route"
                  : "Only people with the link can view"}
              </p>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked={isPublic}
              onClick={() => setIsPublic(!isPublic)}
              className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors ${
                isPublic ? "bg-[#C85A2A]" : "bg-muted"
              }`}
            >
              <span
                className={`pointer-events-none inline-block size-5 rounded-full bg-white shadow-sm transition-transform ${
                  isPublic ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </button>
          </div>
        </motion.div>

        {/* Stops section */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16, duration: 0.35 }}
          className="mb-10"
        >
          <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
            Add stops to your route
          </h2>

          {/* Search input */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <Input
              placeholder="Search for a business to add..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="rounded-full h-10 pl-9"
            />
          </div>

          {/* Reorderable stops */}
          <Reorder.Group
            axis="y"
            values={stops}
            onReorder={setStops}
            className="space-y-3"
          >
            <AnimatePresence initial={false}>
              {stops.map((stop, i) => (
                <Reorder.Item
                  key={stop.id}
                  value={stop}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25 }}
                  className="rounded-2xl border border-border bg-card p-4 flex items-center gap-3 cursor-grab active:cursor-grabbing"
                >
                  <GripVertical className="size-5 text-muted-foreground shrink-0" />
                  <div className="flex items-center justify-center size-8 rounded-full bg-[#C85A2A] text-white text-sm font-bold shrink-0">
                    {i + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-foreground text-sm">
                      {stop.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {stop.address}
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    onClick={() => removeStop(stop.id)}
                    className="shrink-0 text-muted-foreground hover:text-destructive"
                  >
                    <X className="size-4" />
                  </Button>
                </Reorder.Item>
              ))}
            </AnimatePresence>
          </Reorder.Group>

          <Button
            variant="outline"
            onClick={addStop}
            className="rounded-full mt-4 gap-1.5"
          >
            <Plus className="size-4" />
            Add Stop
          </Button>
        </motion.div>

        {/* Map preview */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.24, duration: 0.35 }}
          className="rounded-2xl bg-muted/50 border border-border flex items-center justify-center min-h-[250px] mb-6 relative"
        >
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <MapPin className="size-10 opacity-40" />
            <span className="text-sm">Map preview with route pins</span>
          </div>
          {/* Numbered pins */}
          <div className="absolute inset-0 pointer-events-none">
            {stops.map((_, i) => {
              const positions = [
                { top: "30%", left: "20%" },
                { top: "40%", left: "40%" },
                { top: "35%", left: "60%" },
                { top: "55%", left: "75%" },
                { top: "65%", left: "85%" },
              ];
              const pos = positions[i % positions.length];
              return (
                <div
                  key={i}
                  className="absolute flex items-center justify-center size-7 rounded-full bg-[#C85A2A] text-white text-xs font-bold shadow-md"
                  style={{ top: pos.top, left: pos.left }}
                >
                  {i + 1}
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Estimates */}
        <div className="flex items-center gap-6 mb-8 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Clock className="size-4" />
            Est. {estimatedDuration} min
          </span>
          <span className="flex items-center gap-1.5">
            <Route className="size-4" />
            Est. {estimatedDistance} mi
          </span>
          <Badge variant="secondary" className="text-xs">
            {stops.length} stops
          </Badge>
        </div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.32, duration: 0.35 }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <Button
            size="lg"
            className="rounded-full w-full sm:w-auto px-8 text-base h-12 bg-[#C85A2A] hover:bg-[#A84520]"
          >
            Save Route
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full w-full sm:w-auto px-6 h-12"
          >
            Save as Draft
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
