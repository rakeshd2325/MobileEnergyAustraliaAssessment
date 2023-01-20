export interface StepResult {
  status: StepStatus;
  duration: number;
  error_message?: string;
}

export interface Step {
  result: StepResult;
}

export interface Scenario {
  id: string;
  name: string;
  steps: Step[];
}

export interface Feature {
  name: string;
  elements: Scenario[];
}

export type StepStatus = 'passed' | 'failed' | 'undefined' | 'skipped';
export type ScenarioType = 'scenario' | 'background';

export interface Scenario {
  type: ScenarioType;
}
