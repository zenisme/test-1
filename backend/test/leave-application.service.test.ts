import { jest, describe, it, expect, beforeEach, afterEach } from '@jest/globals';
import { LeaveApplicationService } from '../src/modules/leave-application/leave-application.service';
import { ILeaveApplication, LeaveApplicationStatus } from '../src/modules/leave-application/leave-application.interface';

// Mock the leaveApplication delegate
function getPrismaMock() {
  return {
    leaveApplication: {
      create: jest.fn(),
      findMany: jest.fn(),
      update: jest.fn(),
      findUnique: jest.fn(),
      delete: jest.fn(),
      deleteMany: jest.fn(),
    },
  };
}

describe('LeaveApplicationService', () => {
  let service: LeaveApplicationService;
  let prismaMock: any;
  let leaveApplicationMock: ILeaveApplication;

  beforeEach(() => {
    service = new LeaveApplicationService();
    prismaMock = getPrismaMock();
    // @ts-ignore
    service.prisma = prismaMock;
    // Mock data
    leaveApplicationMock = {
      id: 1,
      employeeId: 1,
      leaveTypeId: 1,
      startDate: new Date('2024-06-25'),
      endDate: new Date('2024-06-26'),
      status: LeaveApplicationStatus.PENDING,
      appliedDate: new Date('2024-06-24'),
      reason: 'Vacation',
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create a leave application', async () => {
    prismaMock.leaveApplication.create.mockResolvedValue(leaveApplicationMock);
    const result = await service.createLeave(leaveApplicationMock);
    expect(result).toEqual(leaveApplicationMock);
    expect(prismaMock.leaveApplication.create).toHaveBeenCalledTimes(1);
  });

  it('should get all leaves by employee id', async () => {
    prismaMock.leaveApplication.findMany.mockResolvedValue([leaveApplicationMock]);
    const result = await service.getAllLeavesByEmployeeId(1);
    expect(result).toEqual([leaveApplicationMock]);
    expect(prismaMock.leaveApplication.findMany).toHaveBeenCalledTimes(1);
  });

  it('should approve a leave', async () => {
    const approvedLeave = { ...leaveApplicationMock, status: LeaveApplicationStatus.APPROVED };
    prismaMock.leaveApplication.update.mockResolvedValue(approvedLeave);
    const result = await service.approveLeave(1);
    expect(result).toEqual(approvedLeave);
    expect(prismaMock.leaveApplication.update).toHaveBeenCalledTimes(1);
  });

  it('should find a leave by id', async () => {
    prismaMock.leaveApplication.findUnique.mockResolvedValue(leaveApplicationMock);
    const result = await service.findById(1);
    expect(result).toEqual(leaveApplicationMock);
    expect(prismaMock.leaveApplication.findUnique).toHaveBeenCalledTimes(1);
  });

  it('should delete a leave', async () => {
    prismaMock.leaveApplication.delete.mockResolvedValue(undefined);
    await service.deleteLeave(1);
    expect(prismaMock.leaveApplication.delete).toHaveBeenCalledTimes(1);
  });


  it('should update a leave', async () => {
    const updatedLeave = { ...leaveApplicationMock, status: LeaveApplicationStatus.APPROVED };
    prismaMock.leaveApplication.update.mockResolvedValue(updatedLeave);
    const result = await service.updateLeave(1, { status: LeaveApplicationStatus.APPROVED });
    expect(result).toEqual(updatedLeave);
    expect(prismaMock.leaveApplication.update).toHaveBeenCalledTimes(1);
  });
});
