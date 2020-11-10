/*---------------------------------------------------------------------------------------------
* Copyright (c) Bentley Systems, Incorporated. All rights reserved.
* See LICENSE.md in the project root for license terms and full copyright notice.
*--------------------------------------------------------------------------------------------*/
import * as React from "react";
import SampleApp from "common/SampleApp";
import { BlankViewport } from "common/GeometryCommon/BlankViewport";
import { GeometryDecorator } from "common/GeometryCommon/GeometryDecorator";
import { IModelApp } from "@bentley/imodeljs-frontend";
import { CurveChain, CurveChainWithDistanceIndex, CurveFactory, LineString3d, Path, Point3d } from "@bentley/geometry-core";
import ClosestPointOnCurveUI from "./ClosestPointOnCurveUI";

export default class ClosestPointOnCurveApp implements SampleApp {

  public static getClosestPointOnCurve(path: CurveChain, point: Point3d) {
    const indexedChain = CurveChainWithDistanceIndex.createCapture(path);
    if (undefined === indexedChain)
      return;

    const location = indexedChain.closestPoint(point, false);
    return location?.point;
  }

  public static createPath(curveType: string) {
    const sideLength = 500;
    const lowerLeft = Point3d.create(250, 250);
    const upperRight = Point3d.create(lowerLeft.x + sideLength, lowerLeft.y + sideLength);

    let curveChain: CurveChain | undefined;

    if ("Rounded Rectangle" === curveType)
      curveChain = CurveFactory.createRectangleXY(lowerLeft.x, lowerLeft.y, upperRight.x, upperRight.y, 0, 50);
    else {
      const points = [
        lowerLeft,
        Point3d.create(lowerLeft.x + 0.00 * sideLength, lowerLeft.y + 0.00 * sideLength),
        Point3d.create(lowerLeft.x + 0.00 * sideLength, lowerLeft.y + 0.50 * sideLength),
        Point3d.create(lowerLeft.x + 0.50 * sideLength, lowerLeft.y + 1.00 * sideLength),
        Point3d.create(lowerLeft.x + 0.50 * sideLength, lowerLeft.y + 0.50 * sideLength),
        Point3d.create(lowerLeft.x + 1.00 * sideLength, lowerLeft.y + 0.50 * sideLength),
        Point3d.create(lowerLeft.x + 1.00 * sideLength, lowerLeft.y + 0.00 * sideLength),
      ]
      if ("Line String" === curveType)
        curveChain = Path.create(LineString3d.create(points));
      else if ("Rounded Line String" === curveType)
        curveChain = CurveFactory.createFilletsInLineString(points, 50);
    }

    return curveChain;
  }

  public static async setup(): Promise<React.ReactNode> {
    await BlankViewport.setup();
    BlankViewport.decorator = new GeometryDecorator(true, 10);
    IModelApp.viewManager.addDecorator(BlankViewport.decorator);

    return <ClosestPointOnCurveUI></ClosestPointOnCurveUI>;
  }

  public static teardown() {
    if (null != BlankViewport.decorator) {
      IModelApp.viewManager.dropDecorator(BlankViewport.decorator);
    }
  }
}
