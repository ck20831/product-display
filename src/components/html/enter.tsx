import {useEnterXR, useSessionSupported} from "@coconut-xr/natuerlich/react";


interface EnterDialogProps {
    setState: (val: "hide" | "AR" | "VR") => void;
}

const XRSettings: XRSessionInit = {
    requiredFeatures: ["local-floor"],
    optionalFeatures: ["hand-tracking"],
};

const Container = (props: any) => (
    <div
        style={{
            zIndex: 2,
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backdropFilter: "blur(5px)",
            background: "rgba(0,0,0,0.8)",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "auto",
            padding: "2rem 0",
        }}
        {...props}
    />
);

const InnerContainer = (props: any) => (
    <div
        style={{
            maxWidth: "min(30rem, 80vw)",
            display: "flex",
            flexDirection: "column",
            rowGap: "2rem",
        }}
        {...props}
    />
);

const ButtonRow = (props: any) => (
    <div
        style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            columnGap: "2rem",
            justifyContent: "space-between",
        }}
        {...props}
    />
);

const XRButton = ({ supported, enterFunction, setState, stateVal }: any) => (
    <button
        className="xr-button"
        onClick={() => {
            if (supported) {
                enterFunction();
            } else {
                setState(stateVal);
            }
        }}
    >
        {stateVal}
    </button>
);

export const EnterDialog = ({ setState }: EnterDialogProps) => {
    const enterAR = useEnterXR("immersive-ar", XRSettings);
    const enterVR = useEnterXR("immersive-vr", XRSettings);
    const arSupported = useSessionSupported("immersive-ar");
    const vrSupported = useSessionSupported("immersive-vr");

    return (
        <Container>
            <InnerContainer>
                <h2 style={{margin: 0}}>
                    歡迎來到3D展示空間
                    <br/>
                    <h2 style={{margin: 0}}>選擇以下體驗方式</h2>
                </h2>
                <ButtonRow>
                    <XRButton
                        supported={arSupported}
                        enterFunction={enterAR}
                        setState={setState}
                        stateVal="AR"
                    />
                    <XRButton
                        supported={vrSupported}
                        enterFunction={enterVR}
                        setState={setState}
                        stateVal="VR"
                    />
                    <button className="xr-button" onClick={() => setState("hide")}>
                        2D
                    </button>
                </ButtonRow>
            </InnerContainer>
        </Container>
    );
};