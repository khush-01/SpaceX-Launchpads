type Pad = {
  name: String;
  details: String;
  status: String;
  launches: Number[];
};

type Fairings = {
  reused: Boolean;
};

type LaunchData = {
  name: String;
  details: String;
  date_unix: number;
  success: Boolean;
  fairings: Fairings;
  rocket: Number;
};

export { Pad, LaunchData };
