export const LandscapeVersion = {
    Latest: 'latest'
} as const;

export type LandscapeVersion = typeof LandscapeVersion.Latest;

/**
 * The version of the IcePanel API this client is built for
 * When bumping versions only specify one explicit version so clients are aware of the breaking change release.
 */
export type IcePanelAPIVersion = 'v1';