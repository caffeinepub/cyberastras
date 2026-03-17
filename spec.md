# CyberAstras

## Current State
- Website deployed with dark cyber-astra theme
- About section shows Founder-1.jpeg with 3:2 aspect ratio (crops image)
- Contact form submits plaintext name/email/message to backend
- Backend stores inquiries in plaintext Map

## Requested Changes (Diff)

### Add
- Client-side AES-GCM encryption (Web Crypto API) for contact form data before submission
- Backend stores encrypted ciphertext blobs
- Update About section image to new uploaded photo (/assets/uploads/image-1.png) showing full portrait

### Modify
- Backend: change Inquiry fields to store encrypted blobs (Text/Blob)
- Frontend About: use new image path, change aspect ratio from 3/2 to portrait (4/5 or auto) so full photo is visible
- Frontend Contact: encrypt name, email, message with AES-GCM before calling submitInquiry

### Remove
- Old Founder-1.jpeg reference in About section

## Implementation Plan
1. Update backend main.mo to store encrypted data fields
2. Update frontend About section image src and aspect ratio
3. Add Web Crypto AES-GCM encrypt utility in frontend
4. Encrypt contact form fields before mutation call
5. Validate and deploy
