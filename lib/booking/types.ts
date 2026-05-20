export type BookingGoal = "new" | "known" | "help";

export type BookingStep =
  | "goal"
  | "appointment"
  | "provider"
  | "time"
  | "details"
  | "policy"
  | "confirm";

export type ClientType = "new" | "returning";

export type PolicyType =
  | "free-consultation"
  | "paid-consultation"
  | "paid-credited"
  | "deposit"
  | "card-on-file"
  | "none";

export type BookingOpenOptions = {
  goal?: BookingGoal;
  consultationId?: string;
  categoryId?: string;
  serviceId?: string;
  concernId?: string;
};

export type ConsultationType = {
  id: string;
  title: string;
  description: string;
  durationMinutes: number;
  policy: PolicyType;
};

export type ServiceCategoryOption = {
  id: string;
  title: string;
};

export type BookableService = {
  id: string;
  categoryId: string;
  label: string;
  durationMinutes: number;
  bookingMode: "direct" | "consultation";
  consultationId?: string;
};

export type BookingConcern = {
  id: string;
  title: string;
  recommendations: {
    type: "consultation" | "service";
    id: string;
    label: string;
    note?: string;
  }[];
};

export type ProviderOption = {
  id: string;
  name: string;
  role: string;
  specialty: string;
  nextAvailable: string;
};

export type TimePeriod = "morning" | "afternoon" | "evening";

export type BookingDetails = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  dateOfBirth: string;
  clientType: ClientType;
};
