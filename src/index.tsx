import React from 'react';

type Props = {
  isLoading: boolean;
  errorMessage?: string;
  pivot: string;
};

export const VisualEditor: React.FC<Props> = props => {
  // 'isLoading' is missing in props validation
  // 'errorMessage' is missing in props validation
  // 'pivot' is missing in props validation
  const { isLoading, errorMessage, pivot } = props;

  // Intentionally missing out "pivot" for control experiment.
  console.log({ isLoading, errorMessage });

  return null;
};
