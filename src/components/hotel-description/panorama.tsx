"use client";

import React from "react";
import Center, { Axes } from "@jektis/components/generic/center";
import { Modal } from "flowbite-react";
import ImageGallery from "react-image-gallery";

export default function Panorama({
  images,
}: {
  images: string[];
}): React.ReactNode {
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const imagesToShow = images.map((image, index) => ({
    original: image,
    description: `image ${index}`,
  }));
  return <ImageGallery items={imagesToShow} />;
}
