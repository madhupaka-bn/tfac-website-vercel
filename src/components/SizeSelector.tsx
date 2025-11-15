import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface SizeSelectorProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSize: (size: string) => void;
  productName: string;
}

const sizes = ["S", "M", "L", "XL"];

const SizeSelector = ({ isOpen, onClose, onSelectSize, productName }: SizeSelectorProps) => {
  const [selectedSize, setSelectedSize] = useState<string>("");

  const handleConfirm = () => {
    if (selectedSize) {
      onSelectSize(selectedSize);
      setSelectedSize("");
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Select Size for {productName}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          <div className="grid grid-cols-4 gap-3">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`p-4 border-2 rounded-lg font-semibold transition-all ${
                  selectedSize === size
                    ? "border-primary bg-primary/10"
                    : "border-border hover:border-primary/50"
                }`}
              >
                {size}
              </button>
            ))}
          </div>

          <Button
            className="w-full hover-glow"
            onClick={handleConfirm}
            disabled={!selectedSize}
          >
            Confirm Size
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SizeSelector;
