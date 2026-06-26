export const submitBooking = async (data: any) => {
  const response = await fetch(
    "https://script.google.com/macros/s/AKfycbxhR6rPBGLOH_LbcNLNzUxi9bYSdELHBV-q6B_d8jkbpF578DaxddjeMfpQH8ANVRJD/exec",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  return response.json();
};