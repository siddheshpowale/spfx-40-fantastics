/**
 * @file
 * QR Code Web Part for SharePoint Framework SPFx
 *
 * Author: Olivier Carpentier
 * Copyright (c) 2016
 */
export interface ISocialPhotoStreamWebPartProps {
  network: string;
  userName: string;
  limit: number;
  overlay: boolean;
  width: number;
  height: number;
  spacing: number;
}
